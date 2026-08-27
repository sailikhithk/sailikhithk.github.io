"use client";
import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Globe from "react-globe.gl";
import type { GlobeMethods } from "react-globe.gl";
import * as satellite from "satellite.js";

const EARTH_RADIUS_KM = 6371; // km
const TIME_STEP = 3 * 1000; // per frame

interface ParsedSat {
  satrec: satellite.SatRec;
  name: string;
}

interface SatWithCoords extends ParsedSat {
  lat: number;
  lng: number;
  alt: number;
}

export default function GlobeSatellites() {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const [satData, setSatData] = useState<ParsedSat[]>();
  const [time, setTime] = useState(new Date());

  // Time ticker
  useEffect(() => {
    let animFrame: number;
    (function frameTicker() {
      animFrame = requestAnimationFrame(frameTicker);
      setTime((t) => new Date(+t + TIME_STEP));
    })();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  // Load satellite data
  useEffect(() => {
    fetch("//unpkg.com/globe.gl/example/datasets/space-track-leo.txt")
      .then((r) => r.text())
      .then((rawData) => {
        const tleData = rawData
          .replace(/\r/g, "")
          .split(/\n(?=[^12])/)
          .filter((d) => d)
          .map((tle) => tle.split("\n"));

        const parsedSatData: ParsedSat[] = tleData
          .map(([name, ...tle]) => ({
            satrec: satellite.twoline2satrec(tle[0], tle[1]),
            name: name.trim().replace(/^0 /, ""),
          }))
          // Exclude those that can't be propagated
          .filter((d) => !!satellite.propagate(d.satrec, new Date())?.position);

        setSatData(parsedSatData);
      });
  }, []);

  // Set initial point of view to North America
  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: 39.8, lng: -98.5, altitude: 2.2 }, 1000);
      const controls = globeEl.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
      }
    }
  }, []);

  const particlesData = useMemo(() => {
    if (!satData) return [];

    // Update satellite positions
    const gmst = satellite.gstime(time);
    const validSats: SatWithCoords[] = [];

    for (const d of satData) {
      const eci = satellite.propagate(d.satrec, time);
      if (eci?.position) {
        const gdPos = satellite.eciToGeodetic(eci.position as satellite.EciVec3<number>, gmst);
        validSats.push({
          ...d,
          lat: satellite.radiansToDegrees(gdPos.latitude),
          lng: satellite.radiansToDegrees(gdPos.longitude),
          alt: gdPos.height / EARTH_RADIUS_KM,
        });
      }
    }

    return [validSats];
  }, [satData, time]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "grab",
        transform: "scale(1.05)",
      }}
    >
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        particlesData={particlesData}
        particleLabel="name"
        particleLat="lat"
        particleLng="lng"
        particleAltitude="alt"
        particlesColor={useCallback(() => "palegreen", [])}
        showAtmosphere={true}
        atmosphereColor="rgba(24, 188, 156, 0.4)"
        atmosphereAltitude={0.15}
        backgroundColor="rgba(0,0,0,0)"
        width={480}
        height={480}
      />
    </div>
  );
}

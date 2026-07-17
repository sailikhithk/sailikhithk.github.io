"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { EducationModal } from "@/app/components/ui/EducationModal";
import { degrees, type Degree } from "@/app/data";

export default function Education() {
  const [activeDegree, setActiveDegree] = useState<Degree | null>(null);

  return (
    <section
      id="education"
      className="section-wrapper"
      style={{ color: "var(--text)" }}
    >
      <div className="section-inner">
        <SectionHeading title="Education" divider="light" />

        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {degrees.map((d, i) => (
            <motion.div
              key={d.shortName}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="card-glass"
              onClick={() => setActiveDegree(d)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveDegree(d);
                }
              }}
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
                cursor: "pointer",
                padding: "1.75rem 2rem",
                border: "1px solid var(--card-border)",
                transition:
                  "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "rgba(24,188,156,0.5)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(24,188,156,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 24px rgba(0,0,0,0.3)";
              }}
            >
              {/* Logo */}
              <Image
                src={d.logo}
                alt={d.shortName}
                width={80}
                height={80}
                style={{
                  objectFit: "contain",
                  borderRadius: "8px",
                  flexShrink: 0,
                }}
              />

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    color: "var(--teal)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    margin: "0 0 0.4rem",
                  }}
                >
                  {d.degree}
                </p>
                <h3
                  style={{
                    color: "var(--text)",
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    margin: "0 0 0.35rem",
                    lineHeight: 1.2,
                  }}
                >
                  {d.institution}
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.82rem",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {d.period} · {d.location} · GPA {d.gpa}
                </p>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                    margin: "0 0 0.85rem",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {d.overview}
                </p>

                {/* Highlight chips */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    marginBottom: "0.85rem",
                  }}
                >
                  {d.highlights.slice(0, 3).map((h, j) => (
                    <span
                      key={j}
                      style={{
                        color: "var(--teal)",
                        fontSize: "0.72rem",
                        background: "rgba(24,188,156,0.08)",
                        border: "1px solid rgba(24,188,156,0.2)",
                        borderRadius: "4px",
                        padding: "0.25rem 0.55rem",
                        fontWeight: 600,
                      }}
                    >
                      {h.label}
                    </span>
                  ))}
                </div>

                <p
                  style={{
                    color: "var(--teal)",
                    fontSize: "0.74rem",
                    fontWeight: 600,
                    margin: 0,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <i
                    className="fa fa-plus-circle"
                    style={{ fontSize: "0.8rem" }}
                  />
                  View details
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <EducationModal
        degree={activeDegree}
        onClose={() => setActiveDegree(null)}
      />
    </section>
  );
}

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
    <section id="education" className="section-wrapper" style={{ color: "var(--text)" }}>
      <div className="section-inner">
        <SectionHeading title="Education" divider="light" />

        <div style={{ position: "relative", paddingBottom: "2rem" }}>
          {/* Vertical track */}
          <div
            style={{
              position: "absolute",
              left: "1px",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.12) 10%, rgba(255,255,255,0.12) 90%, transparent 100%)",
            }}
          />

          {degrees.map((d, i) => (
            <div
              key={d.shortName}
              style={{
                display: "flex",
                gap: "2rem",
                paddingTop: i === 0 ? "0.5rem" : "3rem",
                alignItems: "flex-start",
              }}
            >
              {/* Dot + sticky label + logo (left column) */}
              <div
                style={{
                  position: "sticky",
                  top: "8rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  minWidth: "160px",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "-23px",
                    top: "6px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "var(--bg)",
                    border: "2px solid var(--teal)",
                    boxShadow: "0 0 8px rgba(24,188,156,0.5)",
                  }}
                />
                <span
                  style={{
                    color: "var(--text)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    fontFamily: "var(--font-montserrat), sans-serif",
                    lineHeight: 1.2,
                    maxWidth: "140px",
                    display: "inline-block",
                  }}
                >
                  {d.shortName}
                </span>
                <span
                  style={{
                    color: "var(--teal)",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    marginTop: "0.25rem",
                  }}
                >
                  {d.period}
                </span>
                <Image
                  src={d.logo}
                  alt={d.shortName}
                  width={135}
                  height={60}
                  style={{
                    maxWidth: "135px",
                    maxHeight: "60px",
                    objectFit: "contain",
                    marginTop: "0.75rem",
                  }}
                />
              </div>

              {/* Content card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: 0.05 }}
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
                  flex: 1,
                  cursor: "pointer",
                  transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
                  border: "1px solid var(--card-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(24,188,156,0.5)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(24,188,156,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--card-border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.3)";
                }}
              >
                <p
                  style={{
                    color: "var(--teal)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    margin: "0 0 0.6rem",
                  }}
                >
                  {d.degree}
                </p>
                <p
                  style={{
                    color: "var(--text)",
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    margin: "0 0 0.4rem",
                    lineHeight: 1.2,
                  }}
                >
                  {d.institution}
                </p>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.82rem",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {d.location} · GPA {d.gpa}
                </p>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
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
                  <i className="fa fa-plus-circle" style={{ fontSize: "0.8rem" }} />
                  View details
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <EducationModal degree={activeDegree} onClose={() => setActiveDegree(null)} />
    </section>
  );
}

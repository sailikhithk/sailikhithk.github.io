"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { publications, type Publication } from "@/app/data";

const typeIcon: Record<Publication["type"], string> = {
  patent: "fa-lightbulb-o",
  conference: "fa-microphone",
  ieee: "fa-certificate",
  "book-chapter": "fa-book",
  journal: "fa-newspaper-o",
};

const typeLabel: Record<Publication["type"], string> = {
  patent: "Patent",
  conference: "Conference Paper",
  ieee: "IEEE Publication",
  "book-chapter": "Book Chapter",
  journal: "Journal Article",
};

const typeColor: Record<Publication["type"], string> = {
  patent: "#9b59b6",
  conference: "#e67e22",
  ieee: "#3498db",
  "book-chapter": "#18BC9C",
  journal: "#3498db",
};

export default function Publications() {
  return (
    <section id="publications" className="section-wrapper">
      <div className="section-inner">
        <SectionHeading title="Publications & Patents" divider="light" />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="card-glass"
              style={{
                padding: "1.5rem",
                border: "1px solid var(--card-border)",
                borderLeft: `4px solid ${pub.badgeColor || typeColor[pub.type]}`,
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
              }}
            >
              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
              {/* Top row: icon + type + badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.85rem",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: typeColor[pub.type],
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  <i
                    className={`fa ${typeIcon[pub.type]}`}
                    style={{ fontSize: "0.85rem" }}
                  />
                  {typeLabel[pub.type]}
                </span>
                <span
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                  }}
                >
                  {pub.year}
                </span>
                {pub.badge && (
                  <span
                    style={{
                      background: `${pub.badgeColor}22`,
                      color: pub.badgeColor,
                      border: `1px solid ${pub.badgeColor}55`,
                      borderRadius: "4px",
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginLeft: "auto",
                    }}
                  >
                    {pub.badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3
                style={{
                  color: "var(--text)",
                  fontFamily: "var(--font-montserrat), sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  margin: "0 0 0.5rem",
                  lineHeight: 1.3,
                }}
              >
                {pub.title}
              </h3>

              {/* Venue */}
              <p
                style={{
                  color: "var(--teal)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  margin: "0 0 0.5rem",
                }}
              >
                {pub.venue}
              </p>

              {/* Authors */}
              <p
                style={{
                  color: "#999",
                  fontSize: "0.78rem",
                  margin: "0 0 0.75rem",
                  fontStyle: "italic",
                }}
              >
                {pub.authors}
              </p>

              {/* Topic */}
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  margin: "0 0 1rem",
                }}
              >
                {pub.topic}
              </p>

              {/* Impact stats */}
              {pub.impact && pub.impact.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "0.85rem",
                  }}
                >
                  {pub.impact.map((stat, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "0.5rem 0.75rem",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "6px",
                        minWidth: "120px",
                      }}
                    >
                      <span
                        style={{
                          color: "#888",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          marginBottom: "0.15rem",
                        }}
                      >
                        {stat.label}
                      </span>
                      <span
                        style={{
                          color: "var(--text)",
                          fontSize: "0.78rem",
                          fontWeight: 600,
                        }}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Links */}
              {pub.links.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    flexWrap: "wrap",
                  }}
                >
                  {pub.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--teal)",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        border: "1px solid rgba(24,188,156,0.3)",
                        borderRadius: "4px",
                        padding: "0.3rem 0.7rem",
                        transition: "all 0.2s",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "rgba(24,188,156,0.15)";
                        e.currentTarget.style.borderColor = "var(--teal)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.borderColor =
                          "rgba(24,188,156,0.3)";
                      }}
                    >
                      <i
                        className="fa fa-external-link"
                        style={{ fontSize: "0.7rem" }}
                      />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
              </div>

              {/* Thumbnail (right side, clean white document preview) */}
              {pub.thumbnail && (
                <div
                  style={{
                    flexShrink: 0,
                    width: "200px",
                    height: "260px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.25)",
                    background: "#ffffff",
                    position: "relative",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
                    padding: "4px",
                  }}
                >
                  <Image
                    src={pub.thumbnail}
                    alt={pub.title}
                    fill
                    style={{
                      objectFit: "contain",
                      borderRadius: "6px",
                    }}
                    sizes="200px"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

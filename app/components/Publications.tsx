"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { publications, type Publication } from "@/app/data";

const typeLabel: Record<Publication["type"], string> = {
  "book-chapter": "Book Chapter",
  journal: "Journal Article",
  conference: "Conference Paper",
  patent: "Patent",
};

const typeColor: Record<Publication["type"], string> = {
  "book-chapter": "#18BC9C",
  journal: "#3498db",
  conference: "#e67e22",
  patent: "#9b59b6",
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
                padding: "1.75rem 2rem",
                border: "1px solid var(--card-border)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.75rem",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    background: `${typeColor[pub.type]}22`,
                    color: typeColor[pub.type],
                    border: `1px solid ${typeColor[pub.type]}55`,
                    borderRadius: "4px",
                    padding: "0.2rem 0.6rem",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
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
                {pub.publisher && (
                  <span
                    style={{
                      color: "#888",
                      fontSize: "0.75rem",
                      fontStyle: "italic",
                    }}
                  >
                    {pub.publisher}
                  </span>
                )}
              </div>

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

              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  margin: "0 0 0.85rem",
                }}
              >
                {pub.topic}
              </p>

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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

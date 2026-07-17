"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { certifications } from "@/app/data";

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrapper">
      <div className="section-inner">
        <SectionHeading title="Certifications" divider="light" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            justifyItems: "center",
          }}
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "0.75rem",
                padding: "1.5rem 1rem",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cert.badge}
                alt={cert.name}
                style={{
                  height: "150px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
              <div>
                <p
                  style={{
                    color: "var(--text)",
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    margin: "0 0 0.25rem",
                    lineHeight: 1.3,
                  }}
                >
                  {cert.name}
                </p>
                <p
                  style={{
                    color: "var(--teal)",
                    fontSize: "0.75rem",
                    margin: 0,
                  }}
                >
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { Job } from "@/app/types";

interface JobModalProps {
  job: Job | null;
  onClose: () => void;
}

export function JobModal({ job, onClose }: JobModalProps) {
  useEffect(() => {
    if (!job) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [job, onClose]);

  return (
    <AnimatePresence>
      {job && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(4px)",
            zIndex: 100,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "5vh 1rem 2rem",
            overflowY: "auto",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="card-glass"
            style={{
              maxWidth: "780px",
              width: "100%",
              padding: "2rem",
              position: "relative",
              border: "1px solid rgba(24,188,156,0.25)",
              boxShadow: "0 12px 48px rgba(0,0,0,0.6)",
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "var(--muted)",
                fontSize: "1.1rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(24,188,156,0.15)";
                e.currentTarget.style.color = "var(--teal)";
                e.currentTarget.style.borderColor = "var(--teal)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                e.currentTarget.style.color = "var(--muted)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              }}
            >
              <i className="fa fa-times" />
            </button>

            {/* Header */}
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "center", marginBottom: "1.25rem", paddingRight: "2.5rem" }}>
              {job.logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={job.logo}
                  alt={job.company}
                  style={{
                    maxWidth: "120px",
                    maxHeight: "56px",
                    objectFit: "contain",
                    flexShrink: 0,
                  }}
                />
              )}
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    color: "var(--text)",
                    fontSize: "1.4rem",
                    margin: 0,
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                  }}
                >
                  {job.company}
                </h2>
                <p
                  style={{
                    color: "var(--teal)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    margin: "0.3rem 0 0",
                  }}
                >
                  {job.role}
                </p>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.78rem",
                    margin: "0.2rem 0 0",
                  }}
                >
                  {job.period} · {job.location}
                </p>
              </div>
            </div>

            {/* Overview */}
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.92rem",
                lineHeight: 1.7,
                margin: "0 0 1.5rem",
                paddingBottom: "1.25rem",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {job.overview}
            </p>

            {/* Metrics row */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  fontSize: "0.78rem",
                  margin: "0 0 0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--teal)",
                }}
              >
                Key Metrics
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.6rem",
                }}
              >
                {job.metrics.map((m) => (
                  <span
                    key={m}
                    style={{
                      display: "inline-block",
                      padding: "0.4rem 0.85rem",
                      borderRadius: "6px",
                      background: "rgba(24,188,156,0.08)",
                      border: "1px solid rgba(24,188,156,0.3)",
                      color: "var(--teal)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  fontSize: "0.78rem",
                  margin: "0 0 0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--teal)",
                }}
              >
                What I Worked On
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {job.highlights.map((h) => (
                  <div
                    key={h.label}
                    style={{
                      paddingLeft: "0.9rem",
                      borderLeft: "2px solid rgba(24,188,156,0.4)",
                    }}
                  >
                    <p
                      style={{
                        color: "var(--text)",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        margin: "0 0 0.3rem",
                      }}
                    >
                      {h.label}
                    </p>
                    <p
                      style={{
                        color: "var(--muted)",
                        fontSize: "0.84rem",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {h.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recognition */}
            {job.recognition && job.recognition.length > 0 && (
              <div style={{ marginBottom: "1.5rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "0.78rem",
                    margin: "0 0 0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--teal)",
                  }}
                >
                  Recognition
                </h3>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {job.recognition.map((r) => (
                    <li
                      key={r}
                      style={{
                        color: "var(--muted)",
                        fontSize: "0.84rem",
                        lineHeight: 1.5,
                        display: "flex",
                        gap: "0.6rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <i
                        className="fa fa-trophy"
                        style={{
                          color: "var(--teal)",
                          fontSize: "0.75rem",
                          marginTop: "0.2rem",
                          flexShrink: 0,
                        }}
                      />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stack */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  fontSize: "0.78rem",
                  margin: "0 0 0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--teal)",
                }}
              >
                Tech Stack
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.45rem",
                }}
              >
                {job.stackList.map((s) => (
                  <span
                    key={s}
                    className="tag-pill"
                    style={{ fontSize: "0.72rem" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

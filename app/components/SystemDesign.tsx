"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Diagram {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  mapping: string;
}

const diagrams: Diagram[] = [
  {
    id: "facadedriver",
    title: "FacadeDriver: Multi-Model LLM Orchestration",
    subtitle: "30+ foundation models with routing, retry, fallback, and eval-gated accuracy",
    src: "/assets/diagrams/facadedriver-architecture.svg",
    mapping:
      "Production at Airbnb: 128+ users across 4 teams, 10K rows per run, 50% cost savings via batch inference",
  },
  {
    id: "rag",
    title: "RAG Pipeline with Eval Gates",
    subtitle:
      "End-to-end retrieval-augmented generation: ingest, parse, chunk, embed, retrieve, answer",
    src: "/assets/diagrams/rag-pipeline.svg",
    mapping:
      "Production at Airbnb: 40MB uploads, PII-safe (Presidio, 12 entity types), LLM-as-Judge gate blocks production at precision < 0.85",
  },
  {
    id: "multi-agent",
    title: "Multi-Agent System Architecture",
    subtitle:
      "Insight Miner (11-dim reasoning) + AI Clustering + Tool Caller with agentic memory and guardrails",
    src: "/assets/diagrams/multi-agent-architecture.svg",
    mapping:
      "Production at Airbnb: 23 agent versions evaluated, 1,690 ground-truth samples, F1 lifted to 0.654 (project-best)",
  },
];

export default function SystemDesign() {
  const [active, setActive] = useState(0);

  return (
    <section id="architecture" className="section-wrapper">
      <div className="section-inner">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: "var(--text)",
              fontSize: "3rem",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            System Design
          </h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "var(--teal)",
              margin: "1rem auto 0.5rem",
            }}
          />
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.9rem",
              maxWidth: "600px",
              margin: "0.5rem auto 0",
            }}
          >
            Production architectures I built at Airbnb
          </p>
        </div>

        {/* Tab selector */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          {diagrams.map((d, i) => (
            <button
              key={d.id}
              onClick={() => setActive(i)}
              style={{
                padding: "10px 22px",
                border: `1px solid ${active === i ? "var(--teal)" : "var(--card-border)"}`,
                background: active === i ? "rgba(24, 188, 156, 0.12)" : "transparent",
                color: active === i ? "var(--teal)" : "var(--muted)",
                borderRadius: "999px",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontFamily: "var(--font-montserrat), sans-serif",
              }}
            >
              {d.title.split(":")[0]}
            </button>
          ))}
        </div>

        {/* Active diagram */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "#0d1526",
              border: "1px solid var(--card-border)",
              borderRadius: "16px",
              overflow: "hidden",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {/* Title bar */}
            <div
              style={{
                padding: "20px 28px 16px",
                borderBottom: "1px solid var(--card-border)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  margin: "0 0 4px",
                }}
              >
                {diagrams[active].title}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                  margin: 0,
                }}
              >
                {diagrams[active].subtitle}
              </p>
            </div>

            {/* Diagram */}
            <div
              style={{
                padding: "16px",
                background: "#0a0a0a",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflowX: "auto",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={diagrams[active].src}
                alt={diagrams[active].title}
                style={{
                  width: "100%",
                  maxWidth: "950px",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>

            {/* Mapping bar */}
            <div
              style={{
                padding: "14px 28px",
                background: "rgba(24, 188, 156, 0.08)",
                borderTop: "1px solid var(--teal)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--teal)",
                  whiteSpace: "nowrap",
                  padding: "4px 10px",
                  border: "1px solid var(--teal)",
                  borderRadius: "4px",
                  flexShrink: 0,
                }}
              >
                In Production
              </span>
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text)",
                  lineHeight: 1.4,
                }}
              >
                {diagrams[active].mapping}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

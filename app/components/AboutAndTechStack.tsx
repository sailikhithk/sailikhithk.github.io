"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cards, stats, SKILLS } from "@/app/data";
import type { Skill } from "@/app/types";

const skillList = Object.values(SKILLS);

export default function AboutAndTechStack() {
  const [selectedSkill, setSelectedSkill] = useState<Skill>(
    skillList[0] || {
      name: "python",
      label: "Python",
      color: "#3776AB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      shortDescription:
        "Primary language for LLM orchestration, FacadeDriver, Presidio PII, and Airflow DAGs at Airbnb.",
    }
  );

  return (
    <section id="about" className="section-wrapper" style={{ padding: "3.5rem 0 2.5rem" }}>
      <div className="section-inner">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: "var(--text)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            About &amp; Skills
          </h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "var(--teal)",
              margin: "0.85rem auto 0",
            }}
          />
        </div>

        {/* 3-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr 0.9fr",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          {/* LEFT — About cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {cards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: "12px",
                  padding: "1.25rem 1.4rem",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <i
                    className={`fa ${card.icon}`}
                    style={{
                      color: "var(--teal)",
                      fontSize: "1.3rem",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      color: "var(--text)",
                      margin: 0,
                      textTransform: "uppercase",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {card.title}
                  </p>
                </div>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.82rem",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CENTER — Interactive Tech Stack Matrix */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              background: "#0d1526",
              border: "1px solid var(--card-border)",
              borderRadius: "14px",
              padding: "1.5rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  color: "var(--text)",
                  fontSize: "1.1rem",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Core Tech Stack
              </h3>
              <span
                style={{
                  color: "var(--teal)",
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                }}
              >
                Hover to inspect
              </span>
            </div>

            {/* Interactive Grid of Skill Chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "0.25rem",
              }}
            >
              {skillList.map((skill) => {
                const isActive = selectedSkill.name === skill.name;
                return (
                  <button
                    key={skill.name}
                    onMouseEnter={() => setSelectedSkill(skill)}
                    onClick={() => setSelectedSkill(skill)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      background: isActive ? `${skill.color}22` : "rgba(255,255,255,0.04)",
                      border: `1px solid ${isActive ? skill.color : "rgba(255,255,255,0.1)"}`,
                      color: isActive ? "#ffffff" : "#cccccc",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                      transform: isActive ? "scale(1.04)" : "scale(1)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={skill.icon}
                      alt={skill.label}
                      style={{
                        width: "16px",
                        height: "16px",
                        objectFit: "contain",
                      }}
                      loading="lazy"
                    />
                    <span>{skill.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Skill detail preview panel */}
            <div
              style={{
                minHeight: "80px",
                marginTop: "0.75rem",
                padding: "0.9rem 1.1rem",
                borderRadius: "10px",
                background: "rgba(0, 0, 0, 0.4)",
                border: `1px solid ${selectedSkill.color}44`,
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedSkill.icon}
                alt={selectedSkill.label}
                style={{
                  width: "36px",
                  height: "36px",
                  objectFit: "contain",
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <p
                    style={{
                      color: selectedSkill.color,
                      fontFamily: "var(--font-montserrat), sans-serif",
                      fontSize: "0.85rem",
                      margin: 0,
                      textTransform: "uppercase",
                      fontWeight: 700,
                    }}
                  >
                    {selectedSkill.label}
                  </p>
                </div>
                <p
                  style={{
                    color: "#bbb",
                    fontSize: "0.78rem",
                    lineHeight: "1.5",
                    margin: "0.2rem 0 0",
                  }}
                >
                  {selectedSkill.shortDescription}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Stats */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  textAlign: "center",
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: "12px",
                  padding: "1.1rem 1rem",
                }}
              >
                <h3
                  style={{
                    color: "var(--teal)",
                    fontSize: "2.4rem",
                    fontWeight: 700,
                    margin: 0,
                    fontFamily: "var(--font-montserrat), sans-serif",
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.8rem",
                    margin: "0.35rem 0 0",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

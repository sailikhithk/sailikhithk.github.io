"use client";

import { useState } from "react";

export default function Footer() {
  const links = [
    { href: "https://airbnb.sailikhith.me", label: "Airbnb Portfolio" },
    { href: "https://github.com/sailikhithk", label: "GitHub" },
    { href: "https://www.linkedin.com/in/sailikhithk", label: "LinkedIn" },
    { href: "https://sailikhithk.com", label: "Blog" },
    { href: "https://sailikhith.me/llm.txt", label: "AI-Readable Profile" },
  ];

  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "var(--bg)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "1.5rem 0",
        textAlign: "center",
      }}
    >
      <nav
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
          marginBottom: "1rem",
        }}
        aria-label="Footer navigation"
      >
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            style={{
              color: "#888",
              fontSize: "0.8rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            {label}
          </a>
        ))}
      </nav>
      <p style={{ color: "#555", fontSize: "0.8rem", margin: 0 }}>
        &copy; {new Date().getFullYear()} Sai Likhith Kanuparthi. All rights
        reserved.
      </p>
    </footer>
  );
}

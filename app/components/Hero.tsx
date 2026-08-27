"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FlipWords } from "@/app/components/ui/FlipWords";

const ROLES = [
  "30+ LLMs behind one FacadeDriver",
  "Eval gates that block production",
  "RAG pipelines at 10K rows per run",
  "1,690 ground-truth eval samples",
  "128+ users across 4 teams @ Airbnb",
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/sailikhithk",
    icon: "fa-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/sailikhithk",
    icon: "fa-github",
    label: "GitHub",
  },
  {
    href: "mailto:sailikhithcse@gmail.com",
    icon: "fa-envelope",
    label: "Email",
  },
  {
    href: "https://twitter.com/codewithsai",
    icon: "fa-twitter",
    label: "Twitter",
  },
];

export default function Hero() {
  return (
    <header
      id="page-top"
      className="text-center text-white"
      style={{
        backgroundColor: "var(--bg)",
        paddingTop: "120px",
        paddingBottom: "60px",
        width: "100%",
        display: "block",
      }}
    >
      <div className="section-inner" style={{ textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/img/circle-cropped.png"
            alt="Sai Likhith Kanuparthi"
            width={235}
            height={240}
            className="mx-auto mb-5 rounded-full"
            style={{ height: "240px", width: "235px", objectFit: "cover" }}
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span
            className="block uppercase font-bold"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              letterSpacing: "0.05em",
            }}
          >
            Sai Likhith Kanuparthi
          </span>

          <hr className="star-divider star-light mx-auto mt-4" />

          <span
            className="block font-light"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.75rem)",
              minHeight: "2.2em",
              position: "relative",
            }}
          >
            <FlipWords words={ROLES} duration={2800} />
          </span>

          <p
            className="mt-4 mx-auto max-w-2xl"
            style={{
              fontSize: "1rem",
              letterSpacing: "0.08em",
              lineHeight: "1.7",
              color: "#ddd",
            }}
          >
            I build multi-model LLM orchestration platforms with eval gates that block production
            when accuracy drops. 30+ models, 128+ users, 1,690 ground-truth samples. Senior AI
            Infrastructure & Systems Engineer at Airbnb. 9+ years shipping production AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center gap-6 mt-8"
        >
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
            >
              <i className={`fa ${icon}`} style={{ color: "var(--text)", fontSize: "32px" }} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              background: "rgba(24, 188, 156, 0.12)",
              border: "1px solid var(--teal)",
              borderRadius: "999px",
              fontSize: "0.8rem",
              color: "var(--teal)",
              fontWeight: 600,
              fontFamily: "var(--font-montserrat), sans-serif",
              letterSpacing: "0.03em",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--teal)",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            Open to Senior / Staff AI Infrastructure & Platform Roles
          </span>
        </motion.div>
      </div>
    </header>
  );
}

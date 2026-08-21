import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { publications } from "@/app/data";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sailikhith.me"),
  title: {
    default: "Sai Likhith Kanuparthi - Senior AI Infrastructure & Systems Engineer",
    template: "%s - Sai Likhith Kanuparthi",
  },
  description:
    "Senior AI Infrastructure & Systems Engineer at Airbnb. I own end-to-end architecture of BPI Virtual Analyst, a multi-model GenAI orchestration platform abstracting 30+ foundation models (AWS Bedrock, OpenAI, Anthropic Claude, vLLM) behind FacadeDriver. Kafka 4M req/min, OTel observability, 8+ years shipping production AI systems. NYU MS Computer Science.",
  keywords: [
    "Sai Likhith Kanuparthi",
    "Sai Likhith",
    "sailikhithk",
    "sailikhith",
    "Sai Kanuparthi",
    "Airbnb AI Infrastructure Engineer",
    "Senior AI Infrastructure Engineer",
    "LLM Serving",
    "LLM Infrastructure",
    "GenAI Platform",
    "Kafka Streaming",
    "OpenTelemetry",
    "vLLM",
    "AWS Bedrock",
    "FacadeDriver",
    "MLOps",
    "Distributed Systems Engineer",
    "Agentic Memory",
    "Data Labeling Infrastructure",
    "NYU Computer Science",
    "Eli Lilly Dose Management System",
    "Southwest Airlines Engineer",
    "Shell Data Scientist",
    "Oracle ERP Analytics",
  ],
  authors: [{ name: "Sai Likhith Kanuparthi", url: "https://sailikhith.me" }],
  creator: "Sai Likhith Kanuparthi",
  publisher: "Sai Likhith Kanuparthi",
  alternates: {
    canonical: "https://sailikhith.me",
  },
  openGraph: {
    title: "Sai Likhith Kanuparthi - Senior AI Infrastructure & Systems Engineer",
    description: "Senior AI Infrastructure & Systems Engineer at Airbnb. Owns end-to-end architecture of BPI Virtual Analyst (30+ foundation models, FacadeDriver). Kafka 4M req/min, OTel, vLLM. NYU MS CS. Ex-Eli Lilly, Southwest, Shell, Oracle.",
    url: "https://sailikhith.me",
    siteName: "Sai Likhith Kanuparthi",
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Likhith Kanuparthi - Senior AI Infrastructure & Systems Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Likhith Kanuparthi - Senior AI Infrastructure & Systems Engineer @ Airbnb",
    description: "Owns BPI Virtual Analyst (30+ foundation models, FacadeDriver). Kafka 4M req/min, OTel, vLLM. NYU MS CS.",
    images: ["/og-image.png"],
    creator: "@codewithsai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/img/circle-cropped.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#18BC9C" />
        <meta name="author" content="Sai Likhith Kanuparthi" />
        <meta name="google-site-verification" content="" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sai Likhith Kanuparthi",
              "alternateName": ["Sai Likhith", "sailikhithk", "Sai Kanuparthi"],
              "url": "https://sailikhith.me",
              "image": "https://sailikhith.me/img/circle-cropped.png",
              "email": "mailto:sailikhithcse@gmail.com",
              "jobTitle": "Senior AI Infrastructure & Systems Engineer",
              "description": "Senior AI Infrastructure & Systems Engineer at Airbnb. Owns end-to-end architecture of BPI Virtual Analyst, a multi-model GenAI orchestration platform abstracting 30+ foundation models (AWS Bedrock, OpenAI, Anthropic Claude, vLLM) behind FacadeDriver. Kafka 4M req/min, OTel observability.",
              "nationality": {
                "@type": "Country",
                "name": "United States"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "addressCountry": "United States"
              },
              "knowsAbout": [
                "AI Infrastructure",
                "LLM Serving",
                "LLM Infrastructure",
                "GenAI Platform Engineering",
                "Kafka Streaming",
                "OpenTelemetry",
                "Distributed Observability",
                "AWS Bedrock",
                "vLLM",
                "FacadeDriver",
                "Agentic Memory Systems",
                "Data Labeling Infrastructure",
                "Distributed Systems",
                "MLOps",
                "Python",
                "TypeScript",
                "React",
                "Next.js",
                "PostgreSQL",
                "Kafka",
                "Redis",
                "Kubernetes",
                "Terraform",
                "AWS",
                "GCP",
                "Vercel",
                "Docker"
              ],
              "knowsLanguage": ["English", "Telugu", "Hindi"],
              "sameAs": [
                "https://www.linkedin.com/in/sailikhithk",
                "https://github.com/sailikhithk",
                "https://medium.com/@sailikhith",
                "https://medium.com/sailikhithkanuparthi",
                "https://dev.to/sailikhithk",
                "https://leetcode.com/sailikhith",
                "https://www.hackerrank.com/sailikhithcse",
                "https://www.researchgate.net/profile/Sai-Likhith-Kanuparthi",
                "https://sailikhith.me",
                "https://airbnb.sailikhith.me"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Airbnb"
              },
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "New York University",
                  "department": "Computer Science"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "JNTUA",
                  "department": "Electronics and Communication Engineering"
                }
              ],
              "workExperience": [
                {
                  "@type": "Organization",
                  "name": "Airbnb",
                  "description": "Senior AI Infrastructure & Systems Engineer (GenAI Platform - BPI Virtual Analyst, FacadeDriver, 30+ LLM orchestration)"
                },
                {
                  "@type": "Organization",
                  "name": "Eli Lilly",
                  "description": "Senior Software Engineer (Contractor) - Dose Management Platform (21 CFR Part 11)"
                },
                {
                  "@type": "Organization",
                  "name": "Southwest Airlines",
                  "description": "Senior Software Engineer (Contractor) - Backend & Data Platform"
                },
                {
                  "@type": "Organization",
                  "name": "Shell",
                  "description": "Senior Software Engineer (Contractor) - Backend & Data Science"
                },
                {
                  "@type": "Organization",
                  "name": "Oracle",
                  "description": "Software Engineer, ERP Analytics & Data Engineering"
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Sai Likhith Kanuparthi",
              "url": "https://sailikhith.me",
              "description": "Senior AI Infrastructure & Systems Engineer at Airbnb. Owns end-to-end architecture of BPI Virtual Analyst, a multi-model GenAI orchestration platform abstracting 30+ foundation models behind FacadeDriver.",
              "author": {
                "@type": "Person",
                "name": "Sai Likhith Kanuparthi",
                "url": "https://sailikhith.me"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              publications.map((pub) => ({
                "@context": "https://schema.org",
                "@type":
                  pub.type === "patent"
                    ? "CreativeWork"
                    : pub.type === "journal" || pub.type === "ieee"
                      ? "ScholarlyArticle"
                      : pub.type === "book-chapter"
                        ? "Chapter"
                        : "ScholarlyArticle",
                name: pub.title,
                author: pub.authors
                  .split(",")
                  .map((a) => ({
                    "@type": "Person",
                    name: a.trim(),
                  })),
                datePublished: pub.year,
                publisher: pub.publisher
                  ? { "@type": "Organization", name: pub.publisher }
                  : undefined,
                isPartOf:
                  pub.type === "book-chapter"
                    ? { "@type": "Book", name: pub.venue }
                    : undefined,
                url: pub.links[0]?.url,
                keywords: pub.topic.split(/[,.]/).map((k) => k.trim()).slice(0, 5),
              }))
            )
          }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-lato), sans-serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

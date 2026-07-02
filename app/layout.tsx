import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Sai Likhith Kanuparthi",
  description:
    "Sr. Software Engineer, ML Infrastructure & AI Engineering at Airbnb. Building GenAI platforms and data labeling infrastructure at scale.",
  keywords: [
    "Sai Likhith Kanuparthi",
    "Airbnb",
    "ML Infrastructure",
    "GenAI",
    "Software Engineer",
    "Python",
    "LLM",
    "AI",
    "portfolio",
  ],
  authors: [{ name: "Sai Likhith Kanuparthi" }],
  openGraph: {
    title: "Sai Likhith Kanuparthi",
    description: "Sr. SWE ML Infrastructure at Airbnb",
    url: "https://sailikhith.me",
    siteName: "Sai Likhith Kanuparthi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <head>
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
              "url": "https://sailikhith.me",
              "image": "https://sailikhith.me/img/circle-cropped.png",
              "sameAs": [
                "https://www.linkedin.com/in/sailikhithk",
                "https://github.com/sailikhithk",
                "https://medium.com/@sailikhith",
                "https://medium.com/sailikhithkanuparthi",
                "https://dev.to/sailikhithk",
                "https://leetcode.com/sailikhith",
                "https://www.hackerrank.com/sailikhithcse"
              ],
              "jobTitle": "Senior Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Airbnb"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "New York University"
              }
            })
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

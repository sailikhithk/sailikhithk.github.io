import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sai Likhith Kanuparthi — Senior Software Engineer, ML Infrastructure & AI Engineering",
    short_name: "Sai Likhith Kanuparthi",
    description:
      "Senior Software Engineer specializing in ML Infrastructure, GenAI platforms, and agentic memory systems. Currently at Airbnb. NYU MS Computer Science.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#18BC9C",
    icons: [
      {
        src: "/img/circle-cropped.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/img/circle-cropped.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/img/circle-cropped.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["technology", "education", "business", "portfolio"],
    lang: "en",
    dir: "ltr",
  };
}

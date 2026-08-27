export interface Certification {
  name: string;
  issuer: string;
  badge: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect — Professional",
    issuer: "Amazon Web Services",
    badge: "https://images.credly.com/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",
  },
  {
    name: "AWS Certified Developer — Associate",
    issuer: "Amazon Web Services",
    badge: "https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
  },
  {
    name: "AWS Certified Machine Learning — Specialty",
    issuer: "Amazon Web Services",
    badge: "https://images.credly.com/images/778bde6c-ad1c-4312-ac33-2fa40d50a147/image.png",
  },
  {
    name: "Microsoft Certified: Azure Data Scientist Associate (DP-100)",
    issuer: "Microsoft",
    badge:
      "https://raw.githubusercontent.com/komal-30/komal-30/main/Azure%20Data%20Scientist%20Associate%20Badge.png",
  },
];

export interface Publication {
  type: "patent" | "conference" | "ieee" | "book-chapter" | "journal";
  title: string;
  venue: string;
  publisher?: string;
  year: string;
  authors: string;
  topic: string;
  impact?: { label: string; value: string }[];
  badge?: string;
  badgeColor?: string;
  thumbnail?: string;
  links: { label: string; url: string }[];
}

export const publications: Publication[] = [
  {
    type: "patent",
    title:
      "Modular Deep Learning Architecture for Cross-Domain Transfer and Incremental Learning",
    venue: "Indian Patent Office — Application No. 202541026299",
    year: "2025",
    authors: "Sai Likhith Kanuparthi, Sai Yasaswini Majety (Inventors)",
    topic:
      "Architectures for lightweight, parameter-efficient adapters enabling models to transfer knowledge dynamically across disparate domains without catastrophic forgetting. Aligns with frontier modular DL research (Google Modular Deep Learning survey, Microsoft US10235994B2). IPC: G06N 3/08, G06N 3/045, G06N 3/096, G06N 3/084, G06N 20/00.",
    badge: "PUBLISHED",
    badgeColor: "#9b59b6",
    thumbnail: "/img/publications/patent.png",
    impact: [
      { label: "Status", value: "Published (INA)" },
      { label: "Filed", value: "Mar 21, 2025" },
      { label: "Published", value: "Mar 27, 2025" },
      { label: "Publication No.", value: "13/2025" },
    ],
    links: [],
  },
  {
    type: "conference",
    title:
      "Full-Stack Machine Learning Development Framework for Energy Industry Applications",
    venue: "SPE ADIPEC 2022 (Abu Dhabi) — SPE-210986-MS",
    publisher: "Society of Petroleum Engineers",
    year: "2022",
    authors:
      "Jie Chen, Changqing Yao, Pandu R. Devarakota, Mohamed Sidahmed, Zexuan Dong, Sai Kanuparthi, Jia Wei",
    topic:
      "Reusable, platform-independent ML framework for energy applications supporting local, Docker, and HPC environments. Co-authored with Shell's top ML researchers (lead author h-index 69, 21,611 citations). Demonstrated cost + turnaround time savings in production.",
    badge: "6 CITATIONS",
    badgeColor: "#e67e22",
    thumbnail: "/img/publications/shell-adipec.png",
    impact: [
      { label: "Citations", value: "6" },
      { label: "Lead Author h-index", value: "69 (Jie Chen, Shell)" },
      { label: "Venue", value: "SPE ADIPEC — top oil & gas conference" },
    ],
    links: [{ label: "OnePetro", url: "https://doi.org/10.2118/210986-MS" }],
  },
  {
    type: "ieee",
    title: "Role of Artificial Intelligence to address Cyberbullying and Future Scope",
    venue: "IEEE Xplore (ICoACT 2023) — Document ID: 11004721",
    publisher: "IEEE",
    year: "2023",
    authors: "Sai Likhith Kanuparthi, Naresh Kumar",
    topic:
      "Analyzes NLP architectures (LSTMs, Transformers) applied to online harassment detection and discusses the transition to real-time generative counters. Indexed in IEEE Xplore with DOI.",
    badge: "IEEE INDEXED",
    badgeColor: "#3498db",
    thumbnail: "/img/publications/ieee-cyberbullying.png",
    impact: [
      { label: "Index", value: "IEEE Xplore" },
      { label: "DOI", value: "10.1109/ICoACT57570.2023.10118947" },
      { label: "Field", value: "AI Safety / NLP" },
    ],
    links: [
      {
        label: "IEEE Xplore",
        url: "https://ieeexplore.ieee.org/abstract/document/11004721",
      },
      {
        label: "DOI",
        url: "https://doi.org/10.1109/ICoACT57570.2023.10118947",
      },
    ],
  },
  {
    type: "book-chapter",
    title: "The Evolution and Rise of State Space Models in AI",
    venue:
      "A Case-Based Study of State Space Models in Health Care: The New Transformers (Ch. 1)",
    publisher: "Cambridge Scholars Publishing",
    year: "2025",
    authors: "Ria Ghosh, Rajeev Kumar, Sai Likhith Kanuparthi",
    topic:
      "Traces the development of State Space Models (SSMs) from control theory and signal processing to modern ML applications. Covers SSM applications in predictive maintenance, financial forecasting, and healthcare. Opening chapter of a Cambridge Scholars book.",
    badge: "CH. 1",
    badgeColor: "#18BC9C",
    thumbnail: "/img/publications/ssm-book.png",
    impact: [
      { label: "Publisher", value: "Cambridge Scholars" },
      { label: "Chapter", value: "1 (Opening)" },
      { label: "Topic", value: "SSMs / Mamba lineage" },
    ],
    links: [
      {
        label: "ResearchGate",
        url: "https://www.researchgate.net/publication/398300276_The_Evolution_and_Rise_of_State_Space_Models_in_AI",
      },
    ],
  },
  {
    type: "book-chapter",
    title: "Future Trends in AI for Cyberbullying Preventions",
    venue:
      "Harnessing Generative AI to Combat Cyberbullying in Industry (Ch. 7) — ISBN 978-1-0364-5866-9",
    publisher: "Cambridge Scholars Publishing",
    year: "2025",
    authors: "Sai Likhith Kanuparthi, Ria Ghosh, Meetu Malhotra, Naresh Kumar",
    topic:
      "Proposes next-generation AI moderation frameworks targeting positive reinforcement, agentic defense networks, and proactive intervention. Published in a 468-page edited volume on Generative AI for online safety.",
    badge: "468-PAGE BOOK",
    badgeColor: "#18BC9C",
    thumbnail: "/img/publications/cyberbullying-book.png",
    impact: [
      { label: "ISBN", value: "978-1-0364-5866-9" },
      { label: "Pages", value: "468" },
      { label: "Published", value: "Sept 2025" },
    ],
    links: [
      {
        label: "ResearchGate",
        url: "https://www.researchgate.net/publication/400478774_Future_Trends_in_AI_for_Cyberbullying_Preventions",
      },
      {
        label: "Cambridge Scholars",
        url: "https://cambridgescholars.com/product/978-1-0364-5866-9/",
      },
    ],
  },
  {
    type: "book-chapter",
    title: "Why Traditional AI Methods Fail in Advanced Anomaly Detection",
    venue:
      "Harnessing Generative AI to Combat Cyberbullying in Industry (Ch. 4, p. 200)",
    publisher: "Cambridge Scholars Publishing",
    year: "2025",
    authors: "Sai Likhith Kanuparthi, Naresh Kumar",
    topic:
      "Reviews the failure modes of classical machine learning and heuristic models in high-dimensional text streams, proving why deep autoencoders and generative moderation are required.",
    badge: "CH. 4",
    badgeColor: "#18BC9C",
    thumbnail: "/img/publications/anomaly-detection.png",
    impact: [
      { label: "Publisher", value: "Cambridge Scholars" },
      { label: "Chapter", value: "4 (p. 200)" },
      { label: "Topic", value: "Anomaly Detection / GenAI" },
    ],
    links: [
      {
        label: "Google Books",
        url: "https://books.google.com/books?hl=en&lr=&id=Tv-PEQAAQBAJ&oi=fnd&pg=PA200&dq=Sai+Likhith+Kanuparthi",
      },
    ],
  },
  {
    type: "conference",
    title:
      "Advancing the Metaverse: The Convergence of Digital Twins, AI, and Emerging Technologies",
    venue: "2025 International Conference on Advanced Computing Technologies (ICoACT) — Accepted",
    year: "2025",
    authors:
      "Preetish Kakkar, Shiwam Mittal, Sethuraman Ulaganathan, Tamilarasan Kannadasan, Sai Likhith Kanuparthi",
    topic:
      "Synthesizes the architecture requirements for digital twin synchronization, Edge AI data routing, and VR interface streaming under Metaverse frameworks.",
    badge: "ACCEPTED",
    badgeColor: "#e67e22",
    thumbnail: "/img/publications/metaverse.png",
    impact: [
      { label: "Status", value: "Accepted / In Press" },
      { label: "Venue", value: "ICoACT 2025" },
      { label: "Topic", value: "Metaverse / Digital Twins" },
    ],
    links: [],
  },
  {
    type: "journal",
    title:
      "FT-IR and GC-MS Metabolomic Fingerprinting of Jasmonic Acid and Salicylic Acid Treated Suspension Cultures of Caralluma fimbriata",
    venue: "Phytomedicine (Elsevier) — Under Review",
    publisher: "Elsevier",
    year: "2026",
    authors:
      "Jaswanth Krishna Boddupalli, Vijaya Bhaskar Reddy Pichili, Sai Likhith Kanuparthi, Kiranmai Chadipiralla",
    topic:
      "Employs PCA, machine learning categorization, and metabolic profiling to isolate active compounds in JA/SA-elicited plant suspension cultures. Submitted to Elsevier's top phytotherapy journal (IF ~6.0).",
    badge: "UNDER REVIEW",
    badgeColor: "#3498db",
    thumbnail: "/img/publications/phytomedicine.png",
    impact: [
      { label: "Journal", value: "Phytomedicine (Elsevier)" },
      { label: "Impact Factor", value: "~6.0" },
      { label: "Status", value: "Under Review" },
    ],
    links: [],
  },
];

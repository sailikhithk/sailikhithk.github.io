export interface Publication {
  type: "book-chapter" | "journal" | "conference" | "patent";
  title: string;
  venue: string;
  publisher?: string;
  year: string;
  authors: string;
  topic: string;
  links: { label: string; url: string }[];
}

export const publications: Publication[] = [
  {
    type: "book-chapter",
    title: "The Evolution and Rise of State Space Models in AI",
    venue: "A Case-Based Study of State Space Models in Health Care: The New Transformers (Ch. 1)",
    publisher: "Cambridge Scholars Publishing",
    year: "2025",
    authors: "Ria Ghosh, Rajeev Kumar, Sai Likhith Kanuparthi",
    topic:
      "Traces the development of State Space Models (SSMs) from control theory and signal processing to modern ML applications. Covers SSM applications in predictive maintenance, financial forecasting, and healthcare.",
    links: [
      {
        label: "ResearchGate",
        url: "https://www.researchgate.net/publication/398300276_The_Evolution_and_Rise_of_State_Space_Models_in_AI",
      },
    ],
  },
  {
    type: "book-chapter",
    title: "Why Traditional AI Methods Fail in Advanced Anomaly Detection",
    venue:
      "Harnessing Generative AI to Combat Cyberbullying in Industry: Strategies, Solutions, and Ethics (Ch. 4, p. 200)",
    publisher: "Cambridge Scholars Publishing",
    year: "2025",
    authors: "Sai Likhith Kanuparthi, Naresh Kumar",
    topic:
      "Reviews the failure modes of classical machine learning and heuristic models in high-dimensional text streams, proving why deep autoencoders and generative moderation are required.",
    links: [
      {
        label: "Google Books",
        url: "https://books.google.com/books?hl=en&lr=&id=Tv-PEQAAQBAJ&oi=fnd&pg=PA200&dq=Sai+Likhith+Kanuparthi",
      },
    ],
  },
  {
    type: "book-chapter",
    title: "Future Trends in AI for Cyberbullying Preventions",
    venue:
      "Harnessing Generative AI to Combat Cyberbullying in Industry: Strategies, Solutions, and Ethics (Ch. 7)",
    publisher: "Cambridge Scholars Publishing",
    year: "2025",
    authors: "Sai Likhith Kanuparthi, Ria Ghosh, Meetu Malhotra, Naresh Kumar",
    topic:
      "Proposes next-generation AI moderation frameworks targeting positive reinforcement, agentic defense networks, and proactive intervention strategy.",
    links: [
      {
        label: "ResearchGate",
        url: "https://www.researchgate.net/publication/400478774_Future_Trends_in_AI_for_Cyberbullying_Preventions",
      },
      {
        label: "PDF",
        url: "https://stemaway-discourse.s3.dualstack.us-east-2.amazonaws.com/original/2X/b/b69e629aaf20d516434187dae0aaac429f18f031.pdf",
      },
    ],
  },
  {
    type: "journal",
    title:
      "FT-IR and GC-MS Metabolomic Fingerprinting of Jasmonic Acid and Salicylic Acid Treated Suspension Cultures of Caralluma fimbriata",
    venue: "Phytomedicine (Elsevier) — Under Review",
    year: "2026",
    authors:
      "Jaswanth Krishna Boddupalli, Vijaya Bhaskar Reddy Pichili, Sai Likhith Kanuparthi, Kiranmai Chadipiralla",
    topic:
      "Employs PCA, machine learning categorization, and metabolic profiling to isolate active compounds in JA/SA-elicited plant suspension cultures.",
    links: [],
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
    links: [],
  },
  {
    type: "conference",
    title: "Role of Artificial Intelligence to address Cyberbullying and Future Scope",
    venue: "IEEE Xplore (ICoACT 2023)",
    year: "2023",
    authors: "Sai Likhith Kanuparthi, Naresh Kumar",
    topic:
      "Analyzes NLP architectures (LSTMs, Transformers) applied to online harassment detection and discusses the transition to real-time generative counters.",
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
    type: "conference",
    title:
      "Full-Stack Machine Learning Development Framework for Energy Industry Applications",
    venue: "SPE ADIPEC 2022 (Abu Dhabi) — SPE-210986-MS",
    year: "2022",
    authors:
      "Jie Chen, Changqing Yao, Pandu R. Devarakota, Mohamed Sidahmed, Zexuan Dong, Sai Kanuparthi, Jia Wei",
    topic:
      "Reusable, platform-independent ML framework for energy applications supporting local, Docker, and HPC environments to transition from PoC to productization.",
    links: [
      { label: "OnePetro", url: "https://doi.org/10.2118/210986-MS" },
    ],
  },
  {
    type: "patent",
    title:
      "Modular Deep Learning Architecture for Cross-Domain Transfer and Incremental Learning",
    venue: "Indian Patent Office — Application No. 202541010770",
    year: "2025",
    authors: "Sai Likhith Kanuparthi, Sai Yasaswini Majety",
    topic:
      "Architectures for lightweight, parameter-efficient adapters enabling models to transfer knowledge dynamically across disparate domains without catastrophic forgetting.",
    links: [],
  },
];

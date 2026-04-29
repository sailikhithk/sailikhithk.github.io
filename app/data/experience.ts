import type { Job } from "@/app/types";

export const jobs: Job[] = [
  {
    company: "Airbnb",
    logo: "/img/airbnb-logo.png",
    role: "Sr. Software Engineer — ML Infrastructure",
    period: "Jun 2025 – Present",
    desc: "Built BPI Virtual Analyst — a 5-step LLM wizard integrating 30+ models (GPT-4o, Claude, Gemini, Llama) used by ~55 analysts. Scaled from 600 → 10,000 rows/run. Built Presidio PII pipeline (30% faster). Led Redpen label export upgrade targeting 80% runtime reduction.",
    stack:
      "Python · Streamlit · Flask · Celery · Airflow · Labelbox · Presidio · AWS · OTEL",
  },
  {
    company: "Eli Lilly",
    logo: "/img/lilly-logo.png",
    role: "Sr. Software Engineer (via ThriveOn Solutions)",
    period: "Sept 2024 – Jun 2025",
    desc: "Built and maintained the Dose Management System (DMS) — full-stack healthcare portal for medication management. Java/Spring Boot backend, React frontend, deployed on OpenShift OCP across dev/QA/prod environments.",
    stack:
      "Java · Spring Boot · React · OpenShift · PostgreSQL · GitHub Actions",
  },
  {
    company: "Southwest Airlines",
    logo: "/img/southwest-logo.png",
    role: "Sr. Software Engineer (via ThriveOn Solutions)",
    period: "Jan 2023 – Aug 2024",
    desc: "Architected deployment and testing automation pipelines. Containerized services with Docker + Kubernetes. Secure data management with Datadog monitoring. Statistical analysis and regression models on large datasets.",
    stack: "Python · Docker · Kubernetes · AWS · Datadog · Flask",
  },
  {
    company: "Shell PLC",
    logo: "/img/shell-logo.png",
    role: "Sr. Python Developer (via ThriveOn Solutions)",
    period: "Jan 2021 – Nov 2022",
    desc: "Built API service handling 17M pageviews/month at 94% cache efficiency. Cleared 200+ bottlenecks; app 5× faster after refactor. Improved NLP accuracy 86% → 94%. Deployed ML models on AWS SageMaker. Published at SPE ATCE Conference.",
    stack:
      "Python · PySpark · Azure Databricks · AWS SageMaker · MLFlow · Flask · Docker · Jenkins",
  },
  {
    company: "Oracle India",
    logo: "/img/oracle-logo.png",
    role: "Data Engineer",
    period: "Sept 2017 – Jul 2019",
    desc: "Built ERP analytics dashboard across 13 business units; boosted client activity by 20%. Automated PIP process — saved 600+ monthly work hours. Built real-time fraud detection pipeline using Kafka. Best Performer Q3 2018.",
    stack:
      "Python · Java · Oracle Cloud HCM · Kafka · ELK Stack · AWS · Flask · PostgreSQL",
  },
];

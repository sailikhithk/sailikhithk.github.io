import type { Job } from "@/app/types";

export const jobs: Job[] = [
  {
    company: "Airbnb",
    logo: "/img/airbnb-logo.png",
    role: "Sr. Software Engineer — Gen AI Development Experience",
    period: "Sep 2024 – Present",
    desc: "Built BPI Virtual Analyst — a 5-step LLM wizard integrating 30+ models (GPT-4o, Claude, Gemini, Llama) used by ~55 analysts. Scaled from 600 → 10,000 rows/run. Built Presidio PII pipeline (30% faster). Led Redpen label export upgrade targeting 80% runtime reduction.",
    stack:
      "Python · Streamlit · Flask · Celery · Airflow · Labelbox · Presidio · AWS · OTEL",
  },
  {
    company: "Eli Lilly",
    logo: "/img/lilly-logo.png",
    role: "Senior Backend / Full-Stack Engineer — Dose Management System (DMS)",
    period: "Feb 2024 – Aug 2024",
    desc: "Built and maintained the Dose Management System (DMS) — full-stack healthcare portal for medication management. Java/Spring Boot backend, React frontend, deployed on OpenShift OCP across dev/QA/prod environments.",
    stack:
      "Java · Spring Boot · React · OpenShift · PostgreSQL · GitHub Actions",
  },
  {
    company: "Southwest Airlines",
    logo: "/img/southwest-logo.png",
    role: "Senior Backend / Full-Stack Application Engineer",
    period: "Jan 2023 – Aug 2024",
    desc: "Architected deployment and testing automation pipelines. Containerized services with Docker + Kubernetes. Secure data management with Datadog monitoring. Statistical analysis and regression models on large datasets.",
    stack: "Python · Docker · Kubernetes · AWS · Datadog · Flask",
  },
  {
    company: "Shell PLC",
    logo: "/img/shell-logo.png",
    role: "Senior Python Developer / Data Scientist",
    period: "Jun 2021 – Dec 2022",
    desc: "Built API service handling 17M pageviews/month at 94% cache efficiency. Cleared 200+ bottlenecks; app 5× faster after refactor. Improved NLP accuracy 86% → 94%. Deployed ML models on AWS SageMaker. Published at SPE ATCE Conference.",
    stack:
      "Python · PySpark · Azure Databricks · AWS SageMaker · MLFlow · Flask · Docker · Jenkins",
  },
  {
    company: "Oracle India",
    logo: "/img/oracle-logo.png",
    role: "Backend Developer / Data Engineer",
    period: "Aug 2017 – Jul 2019",
    desc: "Built ERP analytics dashboard across 13 business units; boosted client activity by 20%. Automated PIP process — saved 600+ monthly work hours. Built real-time fraud detection pipeline using Kafka. Best Performer Q3 2018.",
    stack:
      "Python · Java · Oracle Cloud HCM · Kafka · ELK Stack · AWS · Flask · PostgreSQL",
  },
  {
    company: "Bharat Sanchar Nigam Limited (BSNL)",
    logo: "/img/bsnl-logo.png",
    role: "Python Developer",
    period: "Dec 2016 – Apr 2017",
    desc: "Improved data mining processes, reducing time to infer customer insights by 20% for marketing strategy development. Enhanced system architecture for monitoring optical fiber communication losses, slashing monthly maintenance budget by 2%.",
    stack: "Python · Data Mining · Optical Fiber Monitoring",
  },
];

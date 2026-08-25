import type { Job } from "@/app/types";

export const jobs: Job[] = [
  {
    company: "Airbnb",
    logo: "/img/airbnb-logo.png",
    role: "Senior AI Infrastructure & Systems Engineer",
    period: "Sep 2024 - Present",
    location: "San Francisco, CA (Remote)",
    desc: "Owned end-to-end architecture of BPI Virtual Analyst - a multi-model GenAI orchestration platform abstracting 30+ foundation models (AWS Bedrock, OpenAI, Anthropic Claude, vLLM) behind FacadeDriver, serving 128+ users. Scaled from 600 to 10,000 rows/run (40MB uploads, PII-safe). Architected Presidio PII pipeline (30% faster). Led Redpen label export upgrade targeting 80% runtime reduction.",
    stack: "Python · Streamlit · Flask · Celery · Airflow · Labelbox · Presidio · AWS · OTEL",
    overview:
      "Senior AI Infrastructure & Systems Engineer on the GenAI Platform team. Owns BPI Virtual Analyst and Redpen UI end-to-end, co-develops Redpen backend. Architects production GenAI platforms serving 128+ users across the Business Process Insight (BPI) Virtual Analyst and Redpen data-labeling systems.",
    highlights: [
      {
        label: "BPI Virtual Analyst (sole owner)",
        detail:
          "Customer-facing Python co-pilot orchestrating 30+ LLMs behind a unified FacadeDriver abstraction layer, serving 128+ users. Scaled batching and streaming pipelines from 600 to 10,000 rows per run (10K rows, 40MB per run, PII-safe).",
      },
      {
        label: "Evaluation harness and agentic memory",
        detail:
          "Built a reproducible eval harness running 23+ agent versions against 1,690 versioned ground-truth samples with dual-model A/B and flip-analysis. Named memory scopes: semantic, episodic, procedural, multi-turn, multi-session. Schema-synced synthetic data generation, batching, chunked streaming.",
      },
      {
        label: "LLM-as-Judge (Loki)",
        detail:
          "Operated the Loki LLM-as-Judge eval gate as the quality gate for agent releases. Used the eval gate, did not build it.",
      },
      {
        label: "Redpen UI (sole owner)",
        detail:
          "Airbnb's data-labeling platform UI. Ships production PRs. Built adhoc upload workflows used by CS Labs, Luxe Labelbox, and AirCover HALO teams.",
      },
      {
        label: "Redpen backend (co-develop)",
        detail:
          "Co-develops the Redpen backend (Alex owns it). Python, Flask, Celery services plus Airflow DAGs plus Hive and Trino plus AWS and GCP.",
      },
      {
        label: "Labelbox Python SDK",
        detail:
          "Built and maintained the Labelbox Python SDK integration used by labeling teams across AirCover, Luxe, and CS Labs.",
      },
      {
        label: "PII protection",
        detail:
          "Microsoft Presidio for PII redaction across 12 entity types with batch optimization.",
      },
      {
        label: "Deployment and on-call",
        detail:
          "Deployed to Sandcastle and Onebrain (Airbnb internal platforms). Served on-call rotations for the GenAI platform. Investigated and resolved production incidents.",
      },
    ],
    metrics: [
      "128+ users served",
      "30+ LLMs orchestrated",
      "23+ agent versions evaluated",
      "1,690 versioned ground-truth samples",
      "600 → 10,000 rows/run",
      "12 PII entity types (Presidio)",
    ],
    recognition: [
      "Appreciation from Ameet Shinde (Engineering lead)",
      "Appreciation from Lori Barber (Luxe Labelbox project, Mar 2026)",
      "Appreciation from Aleck Landgraf (CS Labs labeling kickoff, Feb 2026)",
    ],
    stackList: [
      "Python",
      "Streamlit",
      "Flask",
      "Celery",
      "Airflow",
      "Labelbox",
      "Presidio",
      "AWS",
      "GCP",
      "OpenTelemetry",
      "Datadog",
      "Hive",
      "Trino",
      "Docker",
      "Kubernetes",
      "vLLM",
      "Azure OpenAI",
      "AWS Bedrock",
      "Vertex Gemini",
    ],
  },
  {
    company: "Eli Lilly",
    logo: "/img/lilly-logo.png",
    role: "Senior Software Engineer (Contractor) - Dose Management Platform",
    period: "Feb 2024 - Aug 2024",
    location: "Philadelphia, PA (Remote)",
    desc: "Built and maintained the Dose Management System (DMS) - full-stack healthcare portal for medication management. Java/Spring Boot backend, React frontend, deployed on OpenShift OCP across dev/QA/prod environments.",
    stack: "Java · Spring Boot · React · OpenShift · PostgreSQL · GitHub Actions",
    overview:
      "Led a lean team of senior developers as developer lead (owned PR reviews, design-doc sign-off, release orchestration, onboarding KT sessions). Owned the platform routing AMYVID (florbetapir F-18), Lilly's amyloid PET imaging agent for Alzheimer's diagnosis, through the PETNET Solutions distribution network under a 10-hour administration window from F-18 isotope decay (110-minute half-life). Wore four hats end-to-end: backend, data, frontend, workflow. 99.9% uptime for 6 months.",
    highlights: [
      {
        label: "Backend architecture (Spring Boot 3.2)",
        detail:
          "Designed the database schema with Flyway migrations. Built RESTful APIs for dose order management, approval workflows, and user access control. Implemented an 8-level access control hierarchy (L1 to L8) for 14 user personas. Created Temporal workflows for order approval orchestration (2-step commercial, 3-step clinical).",
      },
      {
        label: "Frontend (React 18 + TypeScript)",
        detail:
          "Built a 5-step dose order wizard (Input, PII De-identification, Deep-dive, Summary, Visualizations). Implemented a RouteGuard system for role-based page access. Built a notification delivery matrix for 6 approval groups across US and EU regions.",
      },
      {
        label: "Database design (PostgreSQL 16)",
        detail:
          "91 schema changes in Release 1.2: audit field standardization (created_at to created_on across 47 tables), table renames, data integrity fixes. Incremental ID infrastructure with id_sequences table.",
      },
      {
        label: "Approval workflows (Temporal)",
        detail:
          "Commercial 2-step (Clinical Supply to Manufacturing to APPROVED). Clinical 3-step (Clinical Supply to Clinical Operations and Manufacturing in parallel to APPROVED). Notification delivery across 6 groups routed by imaging-site country code.",
      },
      {
        label: "Capacity management system",
        detail:
          "Built radioactive decay calculations for F-18 isotope. Earliest time = transit arrival plus minimum volume decay. Latest time = capacity decay vs schedule limit vs maximum volume. 75% of orders use standard configuration; 29% configure min/max volume constraints.",
      },
      {
        label: "DevOps and infrastructure",
        detail:
          "OpenShift on AWS with Istio service mesh. ArgoCD GitOps for continuous delivery. Azure AD MSAL for internal auth, ID.me OAuth2 for external users. AWS S3, SES, SNS, STS integration.",
      },
      {
        label: "Developer lead",
        detail:
          "Served as developer lead on a lean team of fellow senior developers. Owned PR reviews, design-doc sign-off, release orchestration, hired new developers, ran onboarding KT sessions, and coordinated with offshore developers.",
      },
    ],
    metrics: [
      "99.9% uptime for 6 months",
      "10-hour isotope-decay SLA",
      "14 user personas, 8-level RBAC",
      "91 schema changes in R1.2",
      "276 JIRA tickets in R1.2 (191 resolved)",
      "6 approval groups across US/EU",
    ],
    recognition: [
      "End-to-end ownership of DMS backend under 10-hour isotope-decay SLA",
      "Delivered enterprise-grade system meeting 99.9% uptime for 6 months",
    ],
    stackList: [
      "Java 21",
      "Spring Boot 3.2",
      "React 18",
      "TypeScript 5.4",
      "PostgreSQL 16",
      "Flyway",
      "Temporal SDK",
      "OpenShift on AWS",
      "Istio",
      "ArgoCD",
      "Azure AD MSAL",
      "ID.me OAuth2",
      "AWS S3/SES/SNS/STS",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    company: "Southwest Airlines",
    logo: "/img/southwest-logo.png",
    role: "Senior Software Engineer (Contractor) - Backend & Data Platform",
    period: "Jan 2023 - Jan 2024",
    location: "Dallas, TX (Remote)",
    desc: "Owned architecture and production operation of Kafka pipelines sustaining 4M req/min for real-time flight tracking. Containerized services with Docker + Kubernetes. Cut on-call MTTR from 45 to 12 minutes (73% reduction). Statistical analysis and regression models on large datasets.",
    stack: "Python · Docker · Kubernetes · AWS · Datadog · Flask",
    overview:
      "Architected real-time flight-tracking pipelines on Kafka and RabbitMQ for booking and notification routing across multiple consumer services. Raised engineering quality bar to 95% test coverage and cut on-call MTTR from 45 to 12 minutes.",
    highlights: [
      {
        label: "Real-time flight-tracking pipelines",
        detail:
          "Architected real-time flight-tracking pipelines on Kafka streaming and RabbitMQ microservices for booking and notification routing across multiple consumer services. Multi-pod S3 stack with Docker, Kubernetes, and Datadog monitoring.",
      },
      {
        label: "Backend APIs",
        detail:
          "Built Flask Python REST APIs alongside Java/Gradle services with JUnit test coverage. Built an Angular frontend integrated with the REST APIs. Raised unit-test coverage to 95% via test-first methodology.",
      },
      {
        label: "Search and predictive analytics",
        detail:
          "Implemented an Elasticsearch search system across booking and operational datasets. Built TensorFlow and PyTorch predictive models for flight-operations analytics.",
      },
      {
        label: "On-call and reliability",
        detail:
          "Cut on-call MTTR from 45 to 12 minutes through structured runbooks and incident-response process improvements. Authored agile-practice runbooks for the team. Led code reviews and cross-functional collaboration with operations engineering.",
      },
    ],
    metrics: [
      "95% unit-test coverage",
      "MTTR cut from 45 to 12 minutes (73% reduction)",
      "Kafka + RabbitMQ event streaming",
      "Elasticsearch across booking and ops datasets",
    ],
    stackList: [
      "Python",
      "Java",
      "Flask",
      "Django",
      "Angular",
      "Spring Boot",
      "Kafka",
      "RabbitMQ",
      "Elasticsearch",
      "TensorFlow",
      "PyTorch",
      "AWS S3",
      "Docker",
      "Kubernetes",
      "Datadog",
      "Gradle",
      "JUnit",
    ],
  },
  {
    company: "Shell PLC",
    logo: "/img/shell-logo.png",
    role: "Senior Software Engineer (Contractor) - Backend & Data Science",
    period: "Jun 2021 - Dec 2022",
    location: "Houston, TX (Remote)",
    desc: "Owned API service handling 17M pageviews/month at 94% cache efficiency. Cleared 200+ bottlenecks; app 5x faster after refactor. Improved NLP accuracy 86% to 94%. Deployed ML models on AWS SageMaker. Published at SPE ADIPEC 2022 Conference (SPE-210986-MS).",
    stack: "Python · PySpark · Azure Databricks · AWS SageMaker · MLFlow · Flask · Docker · Jenkins",
    overview:
      "Built and operated a high-throughput API-driven publishing service and deployed classical-ML models in production. Published research at SPE ADIPEC 2022 (SPE-210986-MS).",
    highlights: [
      {
        label: "API-driven publishing service",
        detail:
          "Built and operated the publishing service handling 17M pageviews/month at 94% cache efficiency. Cleared 200+ performance bottlenecks across the service-oriented stack.",
      },
      {
        label: "ETL pipelines",
        detail:
          "Automated historical-data extraction from Databricks and Azure via ETL pipelines built on Azure Data Factory (ADF), Spark SQL, and PySpark.",
      },
      {
        label: "ML model deployment",
        detail:
          "Deployed ML models on AWS SageMaker with Docker. Cut feature lead-time 30% and tech debt 32%.",
      },
      {
        label: "NLP text classification",
        detail:
          "Developed an NLP text-classification system for drilling-loss events. Improved accuracy from 86% to 94% via wildcard-regex feature engineering. Published the research at SPE ADIPEC 2022 (SPE-210986-MS).",
      },
      {
        label: "Geophysics ML",
        detail:
          "Built a CNN-autoencoder model for acoustic-impedance signal processing. Built a Responsible-AI POC with LIME and SHAP for explainability over geophysical classifiers.",
      },
    ],
    metrics: [
      "17M pageviews/month at 94% cache efficiency",
      "200+ performance bottlenecks cleared",
      "NLP accuracy 86% → 94%",
      "30% feature lead-time reduction",
      "32% tech-debt reduction",
    ],
    recognition: [
      "Published research at SPE ADIPEC 2022 (paper SPE-210986-MS, DOI 10.2118/210986-MS)",
    ],
    stackList: [
      "Python",
      "SQL",
      "Flask",
      "FastAPI",
      "Databricks",
      "Azure Data Factory",
      "Spark SQL",
      "PySpark",
      "AWS SageMaker",
      "scikit-learn",
      "TensorFlow",
      "CNN-autoencoder",
      "LIME",
      "SHAP",
      "Docker",
      "Azure",
      "Jenkins",
    ],
  },
  {
    company: "Oracle India",
    logo: "/img/oracle-logo.png",
    role: "Software Engineer, ERP Analytics & Data Engineering",
    period: "Aug 2017 - Jul 2019",
    location: "Bangalore, India",
    desc: "Built ERP analytics dashboard across 13 business units; boosted client activity by 20%. Automated PIP process - saved 600+ monthly work hours. Architected real-time fraud detection pipeline using Kafka. Best Performer Q3 2018.",
    stack: "Python · Java · Oracle Cloud HCM · Kafka · ELK Stack · AWS · Flask · PostgreSQL",
    overview:
      "First backend role out of B.Tech. Built enterprise ERP analytics and real-time fraud-detection infrastructure for Oracle's internal business systems serving 13 business units.",
    highlights: [
      {
        label: "ERP analytics backend (P2P + O2C cycles)",
        detail:
          "Built analytics backend serving 13 business units across the procure-to-pay (P2P) and order-to-cash (O2C) cycles. O2C is the payments cycle: order capture, invoicing, accounts receivable, payment collection, cash application, and reconciliation. Boosted quarterly activity 20% via real-time dashboards.",
      },
      {
        label: "Fraud-detection pipelines",
        detail:
          "Architected ELK (Elasticsearch, Logstash, Kibana) plus AWS Kinesis fraud-detection pipelines on Kafka for real-time credit-card transaction routing across the 13 business units.",
      },
      {
        label: "Workflow automation",
        detail:
          "Automated Performance Improvement Plan (PIP) workflows that saved 600+ monthly work hours.",
      },
    ],
    metrics: [
      "13 business units served",
      "20% quarterly activity boost",
      "600+ monthly work hours saved",
      "Real-time fraud detection on Kafka",
    ],
    recognition: ["Best Performer Q3 2018"],
    stackList: [
      "Java",
      "Python",
      "SQL (PL/SQL, Oracle)",
      "Kafka",
      "AWS Kinesis",
      "ELK Stack",
      "Oracle DB",
      "AWS",
      "Flask",
      "PostgreSQL",
    ],
  },
];


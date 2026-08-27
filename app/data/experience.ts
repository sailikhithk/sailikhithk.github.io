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
    diagram: "/assets/diagrams/airbnb-bpi-architecture.svg",
    overview:
      "Senior AI Infrastructure & Systems Engineer on the GenAI Platform team. Owns BPI Virtual Analyst and Redpen UI end-to-end, co-develops Redpen backend. Architects production GenAI platforms serving 128+ users across the Business Process Insight (BPI) Virtual Analyst and Redpen data-labeling systems.",
    problemStatement:
      "Analysts previously faced a 600-row ceiling per run, hard-coded single-model lock-in, and raw PII exposure risk when sending customer messages directly to public model APIs. Re-architected the ingestion, token accounting, and Presidio redaction pipeline to sustain 10,000 rows/run across 30+ foundation models with streaming outputs.",
    solutions: [
      {
        title: "Adaptive Context-Budget Chunker",
        desc: "Chunked streaming file ingestion calculating estimated tokens per row against dynamic model context budgets with overlap windows for multi-turn context retention.",
        filename: "bpi/chunker.py",
        codeSnippet: `def stream_chunks(rows, model_cfg):
    budget = model_cfg.ctx_window * 0.70
    buf, used = [], 0
    for r in rows:
        toks = est_tokens(r)
        if used + toks > budget:
            yield buf
            buf, used = [], 0
        buf.append(r)
        used += toks
    if buf:
        yield buf`,
      },
      {
        title: "Resilient Celery Worker & Token Refresh",
        desc: "Automated credential rotation mid-batch with exponential-backoff retries and jitter, preventing 90-minute LLM inference batch jobs from failing on expired tokens.",
        filename: "bpi/workers.py",
        codeSnippet: `@app.task(
    autoretry_for=(RateLimit, TokenExpired),
    retry_backoff=True,
    retry_jitter=True,
    max_retries=5,
)
def run_chunk(chunk_id, workflow):
    creds = refresh_if_near_expiry()
    res = router.invoke(workflow, chunk_id, creds)
    redis.publish(f"job:{job_id}", res)
    return res`,
      },
      {
        title: "Entity-Targeted Presidio PII Scrubber",
        desc: "Restricted PII recognizers to column-specific schema declarations rather than running 20+ detectors on every cell. Reduced PII runtime by 30% and eliminated false positives on common first names.",
        filename: "bpi/pii_scrubber.py",
        codeSnippet: `def scrub(df, column_schema):
    analyzer = AnalyzerEngine()
    for col, types in column_schema.items():
        # only run recognizers declared for this column
        df[col] = df[col].map(
            lambda v: analyzer.analyze(v, entities=types, language="en")
        )
    return df`,
      },
    ],
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
    ],
    metrics: [
      "128+ users served across 4 teams",
      "30+ LLMs orchestrated (FacadeDriver)",
      "23+ agent versions evaluated",
      "1,690 versioned ground-truth samples",
      "600 → 10,000 rows/run (17x scale)",
      "30% PII pipeline speedup",
    ],
    recognition: [
      "Sai has been an outstanding partner in the deployment of the BPIVA tool... reducing non-value-added work and enabling the team to shift focus to high-impact tasks. — Ameet Shinde (Senior Manager, BPI · Airbnb)",
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
    diagram: "/assets/diagrams/lilly-dose-architecture.svg",
    overview:
      "Led a lean team of senior developers as developer lead (owned PR reviews, design-doc sign-off, release orchestration, onboarding KT sessions). Owned the platform routing AMYVID (florbetapir F-18), Lilly's amyloid PET imaging agent for Alzheimer's diagnosis, through the PETNET Solutions distribution network under a 10-hour administration window from F-18 isotope decay (110-minute half-life). Wore four hats end-to-end: backend, data, frontend, workflow. 99.9% uptime for 6 months.",
    problemStatement:
      "Radioactive tracer isotopes have an irreversible 110-minute half-life, requiring absolute precision in multi-party order lifecycle management, FDA 21 CFR Part 11 electronic signature compliance, and automated compensating actions on delivery delays.",
    solutions: [
      {
        title: "Temporal Distributed Workflow State Machine",
        desc: "Orchestrated complex multi-step radiopharmaceutical order approval, synthesis dispatch, and logistics handoff workflows with automated compensation triggers.",
        filename: "dms/workflows/DoseOrderWorkflow.java",
        codeSnippet: `@WorkflowInterface
public interface DoseOrderWorkflow {
    @WorkflowMethod
    void processDoseOrder(DoseOrderRequest request);
    
    @SignalMethod
    void updateLogisticsStatus(LogisticsUpdate update);
}`,
      },
      {
        title: "21 CFR Part 11 PostgreSQL Audit Triggers",
        desc: "Automated row-level cryptographic auditing triggers capturing old and new JSON state diffs for all master data, roles, and prescription adjustments.",
        filename: "db/migration/V110__audit_triggers.sql",
        codeSnippet: `CREATE OR REPLACE FUNCTION log_master_data_changes()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.audit_logs (entity_type, entity_id, action, old_value, new_value, performed_by, performed_at)
    VALUES (TG_TABLE_NAME, COALESCE(NEW.id, OLD.id), TG_OP, row_to_json(OLD), row_to_json(NEW), current_user, clock_timestamp());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;`,
      },
    ],
    highlights: [
      {
        label: "Dose Management System (developer lead)",
        detail:
          "Full-stack healthcare portal for medication management. Java/Spring Boot backend, React frontend, PostgreSQL database, deployed on OpenShift OCP across dev, QA, and prod environments.",
      },
      {
        label: "Database and auditing architecture",
        detail:
          "Designed and maintained the PostgreSQL database schema with 250+ Flyway migrations. Implemented 21 CFR Part 11 compliant audit triggers for regulatory traceability across clinical data modifications.",
      },
      {
        label: "Event-driven architecture and Temporal",
        detail:
          "Temporal workflows for multi-step distributed order-management transactions with compensating actions. CDC sync pipelines streaming database changes to Amazon S3 and Snowflake for downstream analytics.",
      },
      {
        label: "Security, compliance, and enterprise identity",
        detail:
          "Azure AD (MSAL) SSO for internal staff plus ID.me OAuth2 for external medical professionals with MFA and session lifecycle management. SonarQube, Fortify, and Checkmarx security scans. HIPAA-compliant access controls.",
      },
    ],
    metrics: [
      "99.9% uptime over 6 months",
      "250+ Flyway migrations",
      "21 CFR Part 11 regulatory compliance",
      "10-hour radioactive isotope SLA window",
    ],
    recognition: [
      "Direct client recognition for zero-defect production release of DMS 2.0",
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
    diagram: "/assets/diagrams/southwest-flight-architecture.svg",
    overview:
      "Architected real-time flight-tracking pipelines on Kafka and RabbitMQ for booking and notification routing across multiple consumer services. Raised engineering quality bar to 95% test coverage and cut on-call MTTR from 45 to 12 minutes.",
    problemStatement:
      "High-velocity flight telemetry and status changes required fault-tolerant event processing under sudden surge spikes, real-time consumer synchronization, and strict SLA alerts for airport ground crews.",
    solutions: [
      {
        title: "High-Throughput Kafka Stream Consumer",
        desc: "Partition-aware Kafka stream consumers processing real-time telemetry at 4M req/min with zero message drop and backpressure handling.",
        filename: "telemetry/stream_consumer.py",
        codeSnippet: `class FlightStreamConsumer:
    def __init__(self, topic, brokers, group_id):
        self.consumer = KafkaConsumer(
            topic,
            bootstrap_servers=brokers,
            group_id=group_id,
            enable_auto_commit=False,
            max_poll_records=500
        )`,
      },
    ],
    highlights: [
      {
        label: "Real-time flight-tracking pipelines",
        detail:
          "Architected real-time flight-tracking pipelines on Kafka streaming and RabbitMQ microservices for booking and notification routing across multiple consumer services. Multi-pod S3 stack with Docker, Kubernetes, and Datadog monitoring.",
      },
      {
        label: "Backend APIs & Testing",
        detail:
          "Built Flask Python REST APIs alongside Java/Gradle services with JUnit test coverage. Raised unit-test coverage to 95% via test-first methodology.",
      },
      {
        label: "Search & Predictive Analytics",
        detail:
          "Implemented an Elasticsearch search system across booking and operational datasets. Built TensorFlow and PyTorch predictive models for flight-operations analytics.",
      },
    ],
    metrics: [
      "4M req/min sustained Kafka throughput",
      "95% unit-test coverage",
      "MTTR cut from 45 to 12 minutes (73% reduction)",
      "Elasticsearch booking & ops indexing",
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
    diagram: "/assets/diagrams/shell-subsurface-architecture.svg",
    overview:
      "Built and operated a high-throughput API-driven publishing service and deployed classical-ML models in production. Published research at SPE ADIPEC 2022 (SPE-210986-MS).",
    problemStatement:
      "Subsurface drilling incident classification was historically siloed and slow. Developed an automated NLP feature engineering pipeline and scalable REST API publishing layer for global geophysics and petroleum engineers.",
    solutions: [
      {
        title: "High-Throughput Caching & Service Layer",
        desc: "Refactored API caching layer with multi-tier Redis and in-memory caches sustaining 17M pageviews/month at 94% hit rate.",
        filename: "publishing/cache_layer.py",
        codeSnippet: `@cache.memoize(timeout=3600)
def get_subsurface_model_predictions(feature_hash):
    return sagemaker_runtime.invoke_endpoint(
        EndpointName=ENDPOINT_NAME,
        ContentType='application/json',
        Body=json.dumps(feature_hash)
    )`,
      },
    ],
    highlights: [
      {
        label: "API-driven publishing service",
        detail:
          "Built and operated the publishing service handling 17M pageviews/month at 94% cache efficiency. Cleared 200+ performance bottlenecks across the service-oriented stack.",
      },
      {
        label: "ETL pipelines & SageMaker",
        detail:
          "Automated historical-data extraction from Databricks and Azure via ETL pipelines built on Azure Data Factory (ADF), Spark SQL, and PySpark. Deployed ML models on AWS SageMaker with Docker.",
      },
      {
        label: "NLP text classification (SPE Publication)",
        detail:
          "Developed an NLP text-classification system for drilling-loss events. Improved accuracy from 86% to 94% via wildcard-regex feature engineering. Published at SPE ADIPEC 2022 (SPE-210986-MS).",
      },
    ],
    metrics: [
      "17M pageviews/month at 94% cache efficiency",
      "NLP accuracy 86% → 94%",
      "30% feature lead-time reduction",
      "SPE ADIPEC 2022 Conference Publication",
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
    diagram: "/assets/diagrams/oracle-erp-architecture.svg",
    overview:
      "First backend role out of B.Tech. Built enterprise ERP analytics and real-time fraud-detection infrastructure for Oracle's internal business systems serving 13 business units.",
    problemStatement:
      "Enterprise billing and employee lifecycle processes required automated reconciliation across 13 distinct global business units, removing hundreds of manual review hours.",
    solutions: [
      {
        title: "Automated P2P & O2C Pipeline Reconciler",
        desc: "Built automated data ingestion pipelines reconciling transaction logs and order flows with sub-second error tracking.",
        filename: "erp/reconciler.py",
        codeSnippet: `def reconcile_transactions(batch_records):
    fraud_flagged = []
    for tx in batch_records:
        if evaluate_anomaly_rules(tx):
            fraud_flagged.append(tx)
    return route_to_kafka_alert_topic(fraud_flagged)`,
      },
    ],
    highlights: [
      {
        label: "ERP analytics backend (P2P + O2C cycles)",
        detail:
          "Built analytics backend serving 13 business units across procure-to-pay (P2P) and order-to-cash (O2C) cycles. Boosted quarterly activity 20% via real-time dashboards.",
      },
      {
        label: "Fraud-detection pipelines",
        detail:
          "Architected ELK (Elasticsearch, Logstash, Kibana) plus AWS Kinesis fraud-detection pipelines on Kafka for real-time credit-card transaction routing.",
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

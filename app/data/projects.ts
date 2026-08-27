export type ProjectTag = { name: string; color: string };

export interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  github?: string;
  deploy?: string;
}

export const projects: Project[] = [
  {
    name: "LangChain Upstream Contribution (PR #39351)",
    description:
      "Added token cost tracking and inference latency telemetry callbacks to LangChain's LLM invocation pipeline. Open-source contribution to the world's most widely used LLM orchestration framework. Empowers production teams to monitor model spend across providers in real time.",
    tags: [
      { name: "langchain", color: "#18BC9C" },
      { name: "open-source", color: "#18BC9C" },
      { name: "llm-telemetry", color: "#18BC9C" },
      { name: "cost-tracking", color: "#aaa" },
    ],
    image: "/img/projects/langchain-pr.svg",
    github: "https://github.com/langchain-ai/langchain/pull/39351",
  },
  {
    name: "LiveKit Agents Reliability Layer (PR #6754)",
    description:
      "Engineered ReliabilityObserver for the LiveKit Agents voice AI framework with 23 unit tests. Monitors WebRTC connection degradation, triggers automated reconnection backoff, and streams reliability telemetry for production real-time voice agents.",
    tags: [
      { name: "livekit", color: "#18BC9C" },
      { name: "open-source", color: "#18BC9C" },
      { name: "voice-ai", color: "#aaa" },
      { name: "reliability", color: "#18BC9C" },
    ],
    image: "/img/projects/livekit-pr.svg",
    github: "https://github.com/livekit/agents/pull/6754",
  },
  {
    name: "LiteLLM Gateway Token Proxy (Merged)",
    description:
      "Fixed Vertex AI Gemini token counting calculation in the LiteLLM proxy gateway. Correct token counts are mission-critical for cost attribution, rate limiting, and context window management across multi-provider deployments. Merged to main branch.",
    tags: [
      { name: "litellm", color: "#18BC9C" },
      { name: "open-source", color: "#18BC9C" },
      { name: "vertex-ai", color: "#aaa" },
      { name: "bugfix", color: "#18BC9C" },
    ],
    image: "/img/projects/litellm-pr.svg",
    github: "https://github.com/BerriAI/litellm",
  },
  {
    name: "BPI Virtual Analyst (Airbnb)",
    description:
      "Architected multi-model GenAI orchestration platform abstracting 30+ foundation models (AWS Bedrock, OpenAI, Anthropic Claude, vLLM) behind a model-agnostic FacadeDriver. Scaled to 10,000 rows/run for 55+ analysts with Presidio PII sanitization and Insight Miner.",
    tags: [
      { name: "python", color: "#18BC9C" },
      { name: "facadedriver", color: "#18BC9C" },
      { name: "celery", color: "#aaa" },
      { name: "llm-routing", color: "#18BC9C" },
      { name: "presidio", color: "#aaa" },
    ],
    image: "/assets/diagrams/facadedriver-architecture.svg",
  },
  {
    name: "Redpen Labeling Platform (Airbnb)",
    description:
      "Owned Airbnb's data-labeling and evaluation platform UI. Flask, Celery, Labelbox, Redis. Architected robust data pipelines with SQLAlchemy and Alembic for model evaluation workflows. Serves CS Labs, Luxe Labelbox, and AirCover HALO teams.",
    tags: [
      { name: "flask", color: "#18BC9C" },
      { name: "celery", color: "#aaa" },
      { name: "labelbox", color: "#18BC9C" },
      { name: "redis", color: "#aaa" },
      { name: "sqlalchemy", color: "#18BC9C" },
    ],
    image: "/img/redpen-pipeline.png",
  },
  {
    name: "Dose Management System (Eli Lilly)",
    description:
      "Owned backend architecture for a full-stack healthcare portal handling radioactive isotope distribution under a strict 10-hour decay SLA. Java/Spring Boot backend, React frontend, deployed on OpenShift OCP with 99.9% uptime across clinical environments.",
    tags: [
      { name: "java", color: "#18BC9C" },
      { name: "spring-boot", color: "#18BC9C" },
      { name: "openshift", color: "#aaa" },
      { name: "postgresql", color: "#18BC9C" },
      { name: "hipaa", color: "#aaa" },
    ],
    image: "/assets/diagrams/lilly-dose-architecture.svg",
  },
  {
    name: "Synthetic AI Image Detector (SAI)",
    description:
      "Open-source multi-signal detector for AI-generated images. Three signals (frequency-domain DCT, wavelet reconstruction error, PRNU noise residual) with temperature calibration and refusal verdicts. Evaluated on GenImage benchmark: BigGAN AUROC 0.94.",
    tags: [
      { name: "python", color: "#18BC9C" },
      { name: "deepfake-detection", color: "#18BC9C" },
      { name: "image-forensics", color: "#aaa" },
      { name: "calibration", color: "#18BC9C" },
    ],
    image: "/img/ai-copilots.png",
    github: "https://github.com/sailikhithk/Synthetic-AI-Image-Detector",
  },
  {
    name: "ML Subsurface Pipeline (Shell PLC)",
    description:
      "Owned ML reusable framework for subsurface applications. Refactored Jupyter to production Python package (5x faster execution). Deployed on AWS SageMaker and Databricks. Published at SPE ADIPEC 2022 (SPE-210986-MS).",
    tags: [
      { name: "python", color: "#18BC9C" },
      { name: "pyspark", color: "#aaa" },
      { name: "aws-sagemaker", color: "#18BC9C" },
      { name: "mlflow", color: "#aaa" },
    ],
    image: "/assets/diagrams/shell-subsurface-architecture.svg",
  },
  {
    name: "The Eye (HackNYU Winner)",
    description:
      "Computer Vision and NLP application built to assist visually impaired individuals navigate physical environments in real time. First Place Winner at HackNYU.",
    tags: [
      { name: "python", color: "#18BC9C" },
      { name: "computer-vision", color: "#aaa" },
      { name: "nlp", color: "#18BC9C" },
    ],
    image: "/img/the-eye.png",
    github: "https://github.com/sailikhithk/The-Eye-HackNYU-2020",
  },
];

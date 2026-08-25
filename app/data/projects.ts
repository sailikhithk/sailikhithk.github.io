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
    name: "Redpen (Airbnb)",
    description:
      "Owned Airbnb's data-labeling platform UI. Flask, Celery, Labelbox, Redis. Architected robust data pipelines with SQLAlchemy and Alembic for model evaluation workflows. Serves CS Labs, Luxe Labelbox, and AirCover HALO teams.",
    tags: [
      { name: "flask", color: "#18BC9C" },
      { name: "celery", color: "#aaa" },
      { name: "labelbox", color: "#18BC9C" },
      { name: "redis", color: "#aaa" },
      { name: "sqlalchemy", color: "#18BC9C" },
    ],
    image: "/img/airbnb.png",
  },
  {
    name: "BPI Virtual Analyst (Airbnb)",
    description:
      "Owned end-to-end architecture of a multi-model GenAI orchestration platform abstracting 30+ foundation models (AWS Bedrock, OpenAI, Anthropic Claude, vLLM) behind FacadeDriver. Scaled to 10,000 rows/run for 55+ analysts. Presidio PII pipeline, AI clustering, Insight Miner.",
    tags: [
      { name: "python", color: "#18BC9C" },
      { name: "streamlit", color: "#18BC9C" },
      { name: "celery", color: "#aaa" },
      { name: "llm", color: "#18BC9C" },
      { name: "presidio", color: "#aaa" },
    ],
    image: "/img/Plagiarism.jpg",
  },
  {
    name: "Dose Management System (Eli Lilly)",
    description:
      "Owned backend architecture for a full-stack healthcare portal handling radioactive isotope distribution under 10-hour decay SLA. Java/Spring Boot backend, React frontend, deployed on OpenShift OCP across clinical environments. 99.9% uptime for 6 months.",
    tags: [
      { name: "java", color: "#18BC9C" },
      { name: "spring-boot", color: "#18BC9C" },
      { name: "react", color: "#aaa" },
      { name: "openshift", color: "#aaa" },
      { name: "postgresql", color: "#18BC9C" },
    ],
    image: "/img/Lilly.jpg",
  },
  {
    name: "The Eye (HackNYU)",
    description:
      "Computer Vision and NLP application built to assist visually impaired individuals. Winner at HackNYU.",
    tags: [
      { name: "python", color: "#18BC9C" },
      { name: "computer-vision", color: "#aaa" },
      { name: "nlp", color: "#18BC9C" },
    ],
    image: "/img/the-eye.png",
    github: "https://github.com/sailikhithk/The-Eye-HackNYU-2020",
  },
  {
    name: "ML Subsurface Pipeline (Shell PLC)",
    description:
      "Owned ML reusable framework for subsurface applications. Refactored Jupyter to Python package (5x faster). Deployed on AWS SageMaker. Published at SPE ADIPEC 2022 (SPE-210986-MS).",
    tags: [
      { name: "python", color: "#18BC9C" },
      { name: "pyspark", color: "#aaa" },
      { name: "aws-sagemaker", color: "#18BC9C" },
      { name: "mlflow", color: "#aaa" },
    ],
    image: "/img/Plagiarism.jpg",
  },
  {
    name: "Synthetic AI Image Detector (SAI)",
    description:
      "Open-source multi-signal detector for AI-generated images. Three signals (frequency-domain DCT, wavelet reconstruction error, PRNU noise residual) with temperature calibration, epistemic + aleatoric uncertainty, and refusal verdicts. Evaluated on GenImage benchmark: BigGAN AUROC 0.94, ADM AUROC 0.66, cross-generator generalization experiment. Built for journalists, fact-checkers, and national-security analysts.",
    tags: [
      { name: "python", color: "#18BC9C" },
      { name: "deepfake-detection", color: "#18BC9C" },
      { name: "image-forensics", color: "#aaa" },
      { name: "calibration", color: "#18BC9C" },
      { name: "national-security", color: "#aaa" },
    ],
    image: "/img/ai-copilots.png",
    github: "https://github.com/sailikhithk/Synthetic-AI-Image-Detector",
  },
  {
    name: "LangChain Contribution (PR #39351)",
    description:
      "Added cost tracking and token usage metrics to LangChain's LLM invocation pipeline. Open-source contribution to the most widely used LLM orchestration framework. Helps teams monitor inference spend across model providers.",
    tags: [
      { name: "langchain", color: "#18BC9C" },
      { name: "open-source", color: "#18BC9C" },
      { name: "llm", color: "#18BC9C" },
      { name: "cost-tracking", color: "#aaa" },
    ],
    image: "/img/airbnb.png",
    github: "https://github.com/langchain-ai/langchain/pull/39351",
  },
  {
    name: "LiveKit Agents Contribution (PR #6754)",
    description:
      "Added ReliabilityObserver to LiveKit Agents framework with 23 test cases. Monitors connection health, auto-reconnects on failure, exposes reliability metrics for voice AI pipelines. Used by real-time voice agent deployments.",
    tags: [
      { name: "livekit", color: "#18BC9C" },
      { name: "open-source", color: "#18BC9C" },
      { name: "voice-ai", color: "#aaa" },
      { name: "reliability", color: "#18BC9C" },
    ],
    image: "/img/airbnb.png",
    github: "https://github.com/livekit/agents/pull/6754",
  },
  {
    name: "LiteLLM Contribution (Merged)",
    description:
      "Fixed Vertex Gemini token counting bug in LiteLLM proxy. Correct token counts are critical for cost attribution, rate limiting, and context window management across model providers. Merged to main.",
    tags: [
      { name: "litellm", color: "#18BC9C" },
      { name: "open-source", color: "#18BC9C" },
      { name: "vertex-ai", color: "#aaa" },
      { name: "bugfix", color: "#18BC9C" },
    ],
    image: "/img/airbnb.png",
    github: "https://github.com/BerriAI/litellm",
  },
];

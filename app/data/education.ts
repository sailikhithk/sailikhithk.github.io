export interface EducationHighlight {
  label: string;
  detail: string;
}

export interface Degree {
  institution: string;
  shortName: string;
  logo: string;
  degree: string;
  period: string;
  location: string;
  gpa: string;
  overview: string;
  highlights: EducationHighlight[];
  coursework: string[];
  projects: string[];
  achievements: string[];
}

export const degrees: Degree[] = [
  {
    institution: "New York University",
    shortName: "NYU",
    logo: "/img/nyu.png",
    degree: "MS in Computer Science",
    period: "Aug 2019 – May 2021",
    location: "New York, NY",
    gpa: "3.69 / 4.0",
    overview:
      "Graduate-level CS program at NYU Tandon focusing on distributed systems, big data infrastructure, and applied machine learning. Capstone built a credit-card fraud detection + billing pipeline on Kafka serving 2M+ events/day.",
    highlights: [
      {
        label: "Capstone",
        detail:
          "Real-time credit-card fraud detection pipeline on Kafka — 2M+ events/day, sub-100ms latency, idempotent consumers",
      },
      {
        label: "Big Data",
        detail:
          "Built Hadoop/Spark pipelines processing 50GB+ datasets; MapReduce jobs for aggregation and ETL",
      },
      {
        label: "Distributed Systems",
        detail:
          "Implemented Raft consensus, sharded key-value store, and fault-tolerant replicated state machine",
      },
      {
        label: "Cloud Computing",
        detail: "Deployed containerized microservices on AWS (EKS, Lambda, S3) with Terraform IaC",
      },
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Big Data Analytics",
      "Distributed Systems",
      "Cloud Computing",
      "Machine Learning",
      "Database Systems",
      "Computer Networks",
      "Software Engineering",
    ],
    projects: [
      "Credit-card fraud detection pipeline (Kafka + Spark Streaming + Cassandra)",
      "Sharded key-value store with Raft consensus (Go)",
      "MapReduce framework for large-scale log analysis (Hadoop)",
      "Serverless image processing pipeline (AWS Lambda + S3 + Rekognition)",
    ],
    achievements: [
      "GPA 3.69 / 4.0",
      "Dean's List scholarship recipient",
      "Capstone selected for department showcase",
    ],
  },
  {
    institution: "Jawaharlal Nehru Technological University",
    shortName: "JNTUA",
    logo: "/img/jntua.png",
    degree: "B.Tech in Electronics & Communication Engineering",
    period: "Aug 2013 – May 2017",
    location: "Andhra Pradesh, India",
    gpa: "4.0 / 4.0",
    overview:
      "4-year undergraduate engineering program covering signal processing, embedded systems, and communication networks. Final-year project built gesture-controlled Arduino robots recognized as the department's best academic project.",
    highlights: [
      {
        label: "Best Project Award",
        detail:
          'Gesture-controlled Arduino robots coded in C — recognized as "Best Academic Project" by the department',
      },
      {
        label: "Signal Processing",
        detail:
          "DSP coursework: FIR/IIR filters, FFT implementations, real-time audio processing on TMS320C6713 DSK",
      },
      {
        label: "Embedded Systems",
        detail:
          "Built real-time embedded systems on Arduino and Raspberry Pi with C/Python firmware",
      },
      {
        label: "Communication Networks",
        detail:
          "Coursework in 4G/LTE protocols, antenna design, and RF signal propagation modeling",
      },
    ],
    coursework: [
      "Digital Signal Processing",
      "Embedded Systems",
      "Communication Networks",
      "VLSI Design",
      "Microprocessors & Microcontrollers",
      "Antenna Theory & Design",
      "Control Systems",
      "Linear Algebra & Probability",
    ],
    projects: [
      "Gesture-controlled Arduino robot (C, accelerometer input, motor control)",
      "DSP audio equalizer with real-time FFT (TMS320C6713 DSK, C)",
      "RF signal propagation model for campus WiFi deployment (MATLAB)",
      "Home automation system with Raspberry Pi + Python + GPIO",
    ],
    achievements: [
      "GPA 4.0 / 4.0",
      'Best Academic Project Award — "Gesture-Controlled Arduino Robots"',
      "Department top performer in DSP and Embedded Systems",
    ],
  },
];

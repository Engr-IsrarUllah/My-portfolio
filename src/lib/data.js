import { Code2, Server, Database, Brain, Globe, Cpu, Layers, Workflow, Network, Sparkles } from "lucide-react";

export const personalInfo = {
  name: "Israr Ullah",
  title: "Full-Stack AI Developer & Software Engineer",
  email: "engrisrar256@gmail.com",
  location: "Lahore, Pakistan",
  phone: "923063813405",
  displayPhone: "+92-3063813405",
  linkedin: "https://www.linkedin.com/in/engr-israr-20a619224",
  github: "https://github.com/Engr-IsrarUllah",
  about: "Full-Stack AI Developer specializing in scalable distributed architectures, agentic workflows, and production AI systems built for speed and reliability.",
};

export const skillCategories = [
  {
    title: "AI / GenAI",
    badge: "Specialization",
    skills: ["LLMs", "RAG", "LangChain", "LangGraph", "OpenAI", "MCP Servers", "MCP Client Integration"],
  },
  {
    title: "Frontend Development",
    badge: "Core Stack",
    skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Redux Toolkit", "Bootstrap", "ShadCN", "Material UI"],
  },
  {
    title: "Backend Development",
    badge: "Core Stack",
    skills: ["Node.js", "Express.js", "FastAPI"],
  },
  {
    title: "Databases",
    badge: "Vector & Relational",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Pinecone", "Qdrant"],
  },
  {
    title: "Machine Learning & Deep Learning",
    badge: "AI Models",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV"],
  },
  {
    title: "DevOps & Deployment",
    badge: "Infrastructure",
    skills: ["Docker", "CI/CD", "GitHub Actions", "Git", "Linux"],
  },
  {
    title: "Programming Languages",
    badge: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C#"],
  },
];

export const skills = skillCategories.flatMap(c => c.skills);

export const experience = [
  {
    company: "Cyberify",
    role: "Fullstack AI Developer",
    duration: "Present",
    description:
      "Engineering production full-stack AI solutions using Next.js, Node.js, and Python. Designing autonomous agentic workflows (LangGraph & RAG pipelines), integrating LLM APIs, and architecting scalable database schemas with MongoDB and PostgreSQL.",
  },
  {
    company: "Edusoft System Solutions",
    role: "Fullstack Developer",
    duration: "January 2025 – September 2025",
    description:
      "Developed scalable full-stack web applications using React.js, Node.js, and RESTful APIs. Optimized frontend component performance, streamlined state management, and implemented secure backend service integrations.",
  },
];

export const projects = [
  {
    title: "Signature Apparel: AI-Powered Fashion E-Commerce Platform",
    category: "AI & Fashion E-Commerce",
    description:
      "A modern AI-powered fashion e-commerce platform featuring intelligent semantic search with Qdrant RAG, conversational shopping workflows via LangGraph, and real-time voice assistance integrated with Vapi AI.",
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL (Prisma)",
      "LangGraph",
      "Qdrant",
      "Vapi",
      "WebSockets",
    ],
    link: "https://github.com/Engr-IsrarUllah",
    image: "/projects/signature.png",
  },
  {
    title: "DataQuery AI: Natural Language Data Assistant",
    category: "AI & Database Assistant",
    description:
      "An intelligent conversational assistant that allows users to query databases using natural language instead of SQL, powered by a Pinecone RAG pipeline and OpenAI for accurate, context-aware responses.",
    tech: ["TypeScript", "LangChain", "Pinecone", "OpenAI", "SQL"],
    link: "https://github.com/Engr-IsrarUllah/RAG-SQL-Database-Agent",
    image: "/projects/Rag-agent.png",
  },
  {
    title: "Plant Leaves Disease Detection: Plant Disease AI",
    category: "Machine Learning & CV",
    description:
      "A real-time plant pathology diagnostic tool built with a CNN model trained on 57,000 images using TensorFlow, offering instant disease detection through an interactive Streamlit web interface.",
    tech: ["Python", "Streamlit", "TensorFlow", "NumPy", "Pandas"],
    link: "https://github.com/Engr-IsrarUllah/Plant-Leaves-Disease-Detection",
    image: "/projects/plant.png",
  },
  {
    title: "WorkSphere: AI-Powered Project Management Platform",
    category: "Full Stack & Collaboration SaaS",
    description:
      "A full-stack collaborative project management platform featuring real-time team updates with Socket.IO, RBAC task workflows, and document-aware Q&A assistance powered by Qdrant and LangGraph.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Socket.IO",
      "JWT",
      "Qdrant",
      "RAG",
      "LangGraph",
    ],
    link: "https://github.com/Engr-IsrarUllah/project-manager-fullstack",
    image: "/projects/nexus.png",
  },
  {
    title: "TradePulse: Automated Discord Trading Bot & Signal Engine",
    category: "FinTech & Automated Bots",
    description:
      "An automated algorithmic trading assistant and alert bot built with Express.js and Discord.js. Ingests market signals in real time via WebSockets and dispatches instant technical breakout alerts, risk metrics, and trade execution signals to Discord channels.",
    tech: [
      "Node.js",
      "Express.js",
      "Discord.js",
      "WebSockets",
      "Technical Analysis",
      "REST APIs",
    ],
    link: "https://github.com/Engr-IsrarUllah/crypto-discord-bot",
    image: "/projects/trading-bot.png",
  },
  {
    title: "DentiClinic AI: Voice-Enabled Clinic Booking & Triage Agent",
    category: "Voice AI & Healthcare Automation",
    description:
      "A production voice AI agent engineered for dental clinics using Retell AI and OpenAI. Conducts natural conversational phone triage, answers patient inquiries on dental procedures, and autonomously schedules appointments directly into the clinic calendar with real-time latency under 800ms.",
    tech: [
      "Retell AI",
      "FastAPI",
      "Python",
      "Next.js",
      "OpenAI",
      "Calendar API",
    ],
    link: "https://github.com/Engr-IsrarUllah",
    image: "/projects/denticlinic-ai.png",
  },
];


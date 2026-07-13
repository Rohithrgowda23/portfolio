export interface Project {
  id: string;
  index: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  demo: string;
  caseStudy: string;
  accent: "primary" | "secondary" | "accent";
}

export const PROJECTS: Project[] = [
  {
    id: "ai-resume-analyzer",
    index: "01",
    title: "AI Resume Analyzer",
    description:
      "An AI-powered resume analysis platform that scores resumes against real job descriptions, parses structured data from raw PDFs, and surfaces the exact skill gaps holding a candidate back.",
    tech: [
      "Java",
      "Spring Boot AI",
      "Spring Security",
      "JWT",
      "React",
      "Docker",
      "Google OAuth",
      "LLMs",
      "Prompt Engineering",
    ],
    features: [
      "ATS compatibility score",
      "Automated resume parsing",
      "Secure OAuth authentication",
      "Skill gap analysis",
    ],
    github: "https://github.com/Rohithrgowda23/resumefrontend",
    demo: "https://resumefrontend-ten.vercel.app/",
    caseStudy: "https://github.com/Rohithrgowda23/resumefrontend/blob/main/README.md",
    accent: "primary",
  },
  {
    id: "realtime-chat",
    index: "02",
    title: "Real-Time Chat Application",
    description:
      "A full-duplex messaging platform built on WebSocket and STOMP, supporting live presence, multiple chat rooms, and instant delivery at low latency.",
    tech: ["Spring Boot", "React", "WebSocket", "STOMP", "SockJS", "MySQL"],
    features: [
      "Real-time messaging",
      "Authentication",
      "Online user presence",
      "Multi-user chat rooms",
    ],
    github: "https://github.com/Rohithrgowda23/realchat_frontend",
    demo: "https://realchat-frontend-kohl.vercel.app/",
    caseStudy: "https://github.com/Rohithrgowda23/realchat_frontend/blob/main/README.md",
    accent: "secondary",
  },
  {
    id: "online-food-ordering-system",
    index: "03",
    title: "Online Food Ordering System",
    description:
        "A full-stack food ordering platform that enables users to browse restaurants, add items to a cart, place orders, and securely complete payments. The application includes authentication, order tracking, and an admin dashboard for restaurant management.",
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "REST API",
      "Bootstrap"
    ],
    features: [
      "Restaurant and menu management",
      "Shopping cart & checkout",
      "Order tracking and order history"
    ],
    github: "https://github.com/Rohithrgowda23/foodorder_frontend",
    demo: "#",
    caseStudy: "https://github.com/Rohithrgowda23/foodorder_frontend/blob/main/README.md",
    accent: "accent",
  },
  {
    id: "ecommerce-website",
    index: "04",
    title: "E-Commerce Website",
    description:
        "A modern e-commerce application that allows users to browse products, search by category, manage shopping carts, place orders. The platform includes an admin panel for managing products and inventory.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React",
      "MySQL",
      "REST API",
      "Tailwind CSS"
    ],
    features: [
      "User registration and login",
      "Product search and filtering",
      "Shopping cart and checkout",
      "Admin product management"
    ],
    github: "https://github.com/Rohithrgowda23/E-commerce-",
    demo: "",
    caseStudy: "https://github.com/Rohithrgowda23/E-commerce-/blob/main/README.md",
    accent: "primary",
  },
  {
    id: "pdf-chatbot",
    index: "05",
    title: "AI PDF Chatbot (RAG)",
    description:
        "An AI-powered document question-answering platform that enables users to upload PDF documents and interact with them using natural language. Built using Retrieval-Augmented Generation (RAG), the application extracts, embeds, and stores document chunks in a vector database to provide accurate, context-aware responses.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring AI",
      "OpenAI API",
      "React",
      "MySQL",
      "Ollama (LLM)",
      "Qdrant (Vector DB)",
      "Docker",
      "JWT",
      "REST API"
    ],
    features: [
      "Secure JWT authentication",
      "PDF upload and document management",
      "Automatic text extraction and chunking",
      "Vector embeddings using OpenAI",
      "Semantic search with Qdrant",
      "Context-aware AI responses (RAG)",
      "Conversation history",
      "Dockerized deployment"
    ],
    github: "https://github.com/Rohithrgowda23/Pdf_chatbot",
    demo: "",
    caseStudy: "https://github.com/Rohithrgowda23/Pdf_chatbot/edit/main/README.md",
    accent: "primary",
  },
];

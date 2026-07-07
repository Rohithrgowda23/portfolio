export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "backend",
    title: "Backend",
    description: "Server-side systems, security & APIs",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "JPA",
      "JWT",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces that feel instant",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
  },
  {
    id: "database",
    title: "Database",
    description: "Modeling & querying data at scale",
    skills: ["MySQL", "SQL Server"],
  },
  {
    id: "ai",
    title: "AI",
    description: "Applied generative AI & retrieval",
    skills: [
      "LLMs",
      "Spring AI",
      "OpenAI API",
      "RAG",
      "Prompt Engineering",
      "Embeddings",
      "Qdrant",
      "Pinecone",
      "Chroma",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Tools",
    description: "Shipping and running software",
    skills: ["AWS", "Docker", "GitHub", "Postman", "Maven", "VS Code"],
  },
];

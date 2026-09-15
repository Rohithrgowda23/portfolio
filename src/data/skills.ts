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
      "Spring Security(JWT, OAuth 2.0)",
      "Hibernate",
      "JPA",
      "JDBC",
      "REST APIs",
      "Microservices",
      "Servlet"
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
    skills: ["MySQL", "SQL Server", "Redis", "CRUD Operations", "Query Optimization"],
  },
  {
    id: "ai",
    title: "AI",
    description: "Applied generative AI & retrieval",
    skills: [
      "LLMs",
      "Spring AI",
      "RAG",
      "Prompt Engineering",
      "Embeddings",
      "Semantic Search",
      "Vector Database",
      "AI Chatbots"
    ],
  },
  {
    id: "Tools",
    title: "Devops & Tools",
    description: "Shipping and running software",
    skills: ["Apache Kafka", "Docker","Git", "GitHub", "Postman", "Maven", "VS Code", "IntelliJ IDEA", "CI/CD"],
  },
  {
    id: "core concepts",
    title: "concepts",
    description: "Problem Solving",
    skills: ["Data Structures & Algorithms", "SDLC", "API Design", "JUnit", "Mockito"],
  },
];

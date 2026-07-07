export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Besant Technologies (E&ICT Academy)",
    role: "Advanced Java Full Stack Trainee",
    period: "Training Program",
    highlights: [
      "Completed intensive training in Advanced Java, JDBC, Servlets, Spring Boot, React.js, HTML, CSS, JavaScript, and MySQL",
      "Built multiple full-stack applications integrating frontend and backend using RESTful APIs",
      "Practiced API development, relational database management, JWT authentication, and deployment workflows",
      "Implemented CRUD operations, exception handling, validation, and authentication in real-world projects",
    ],
  },
  {
    company: "JupiterKings Technologies",
    role: "Java Full Stack Developer Intern",
    period: "Internship",
    highlights: [
      "Developed RESTful APIs using Spring Boot",
      "Built responsive React.js user interfaces",
      "Worked with MySQL database and SQL queries",
      "Implemented backend business logic",
      "Integrated frontend and backend applications",
      "Collaborated using Git and Github practices",
    ],
  },

];

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  year: string;
  score: string;
}

export const EDUCATION: EducationItem = {
  degree: "Bachelor of Engineering",
  field: "Computer Science",
  institution: "Visvesvaraya Technological University",
  year: "2025",
  score: "CGPA 7.1",
};

export interface Certification {
  title: string;
  issuer: string;
}

export const CERTIFICATIONS: Certification[] = [
  { title: "Advanced Java Full Stack", issuer: "Besant Technologies" },
  { title: "Full Stack Development", issuer: "JupiterKings Technologies" },
];

export const SITE = {
  name: "Rohith R Gowda",
  title: "Java Full Stack Developer",
  location: "Bengaluru, India",
  email: "rohithrgowda23@gmail.com",
  phone: "+91 89714 87731",
  resumeUrl: "/resume.pdf",
  tagline:
    "Java Full Stack Developer with internship experience building scalable applications across Java, Spring Boot, React, MySQL and generative AI.",
};

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Rohithrgowda23", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/rohithrgowda", icon: "linkedin" },
  { label: "Email", href: "mailto:rohithrgowda23@gmail.com", icon: "mail" },
];

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const ROLE_WORDS = [
  "Java Full Stack Developer",
  "Spring Boot Developer",
  "AI Enthusiast",
  "Backend Engineer",
  "React Developer",
];

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  isText?: boolean;
}

export const STATS: StatItem[] = [
  { value: 1, suffix: "+", label: "Internship Experience" },
  { value: 2, suffix: "+", label: "Major Projects" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 1, suffix: "", label: "AI + Full Stack Developer", isText: true },
];

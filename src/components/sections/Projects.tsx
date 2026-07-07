import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { GithubIcon } from "../ui/BrandIcons";
import { PROJECTS, type Project } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";

const ACCENT_CLASSES: Record<Project["accent"], string> = {
  primary: "from-primary/25 to-transparent",
  secondary: "from-secondary/25 to-transparent",
  accent: "from-accent/25 to-transparent",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative rounded-xl3 glass shadow-soft overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${ACCENT_CLASSES[project.accent]} pointer-events-none`} />
      <div
        className={`relative grid lg:grid-cols-2 gap-0 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="p-9 md:p-12 flex flex-col justify-center">
          <span className="font-mono text-xs text-accent">{project.index}</span>
          <h3 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-4 text-muted leading-relaxed">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-line text-white/70"
              >
                {t}
              </span>
            ))}
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-2.5">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium border border-line rounded-full px-5 py-2.5 hover:border-white/30 transition-colors"
            >
              <GithubIcon size={15} /> GitHub
            </a>
            <a
              href={project.demo}
              className="inline-flex items-center gap-2 text-sm font-medium border border-line rounded-full px-5 py-2.5 hover:border-white/30 transition-colors"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
            <a
              href={project.caseStudy}
              className="inline-flex items-center gap-2 text-sm font-medium border border-line rounded-full px-5 py-2.5 hover:border-white/30 transition-colors"
            >
              <FileText size={15} /> Case Study
            </a>
          </div>
        </div>

        <div className="relative min-h-[280px] lg:min-h-[420px] p-8 flex items-center justify-center">
          <div className="w-full h-full rounded-2xl border border-line bg-surface/60 p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
              <span className="ml-auto font-mono text-[10px] text-muted">
                dashboard
              </span>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-line p-4 flex flex-col justify-end">
                <p className="font-display text-2xl font-semibold text-gradient">92%</p>
                <p className="text-[11px] text-muted mt-1">Match score</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-secondary/20 to-transparent border border-line p-4 flex flex-col justify-end">
                <p className="font-display text-2xl font-semibold text-gradient">1.2s</p>
                <p className="text-[11px] text-muted mt-1">Avg. response</p>
              </div>
              <div className="col-span-2 rounded-xl bg-surface2/80 border border-line p-4">
                <div className="flex items-end gap-1.5 h-16">
                  {[40, 65, 30, 80, 55, 95, 70].map((h, idx) => (
                    <div
                      key={idx}
                      className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
            eyebrow="Selected Work"
            title="Four products, designed and built end to end."
            description="From authentication and real-time communication to AI-powered analysis and e-commerce solutions."
        />

        <div className="mt-16 flex flex-col gap-10">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

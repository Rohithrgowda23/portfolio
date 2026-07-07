import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from "../../data/experience";
import SectionHeading from "../ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="Journey" title="Experience, education & credentials." />

        <div className="mt-16 grid lg:grid-cols-[1.2fr_1fr] gap-14">
          {/* Timeline */}
          <div className="relative pl-8">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
            {EXPERIENCE.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pb-12 last:pb-0"
              >
                <span className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-primary to-accent shadow-glow" />
                <p className="font-mono text-xs text-accent uppercase tracking-widest">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{item.company}</h3>
                <p className="text-muted">{item.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.highlights.map((h) => (
                    <span
                      key={h}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-line text-white/70"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education + Certifications */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="glass rounded-xl2 p-7 shadow-soft"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <GraduationCap size={18} />
                </span>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  Education
                </p>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">
                {EDUCATION.degree}
              </h3>
              <p className="text-muted">{EDUCATION.field} &middot; {EDUCATION.institution}</p>
              <div className="mt-4 flex gap-6 font-mono text-sm text-white/80">
                <span>{EDUCATION.year}</span>
                <span>{EDUCATION.score}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass rounded-xl2 p-7 shadow-soft"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <Award size={18} />
                </span>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  Certifications
                </p>
              </div>
              <div className="mt-5 flex flex-col gap-4">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.title} className="flex items-center justify-between border-b border-line last:border-0 pb-4 last:pb-0">
                    <div>
                      <p className="font-medium">{cert.title}</p>
                      <p className="text-sm text-muted">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

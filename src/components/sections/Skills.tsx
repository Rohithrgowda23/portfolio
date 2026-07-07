import { motion } from "framer-motion";
import { SKILL_GROUPS } from "../../data/skills";
import SectionHeading from "../ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Capabilities"
          title="A toolkit built for full-stack, AI-ready products."
          description="Grouped by where each skill actually earns its keep — from the database layer to the model layer."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-xl2 glass p-7 shadow-soft ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 rounded-xl2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-grad-radial-glow pointer-events-none" />
              <div className="relative">
                <h3 className="font-display text-xl font-semibold">{group.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{group.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 rounded-full border border-line text-white/80 group-hover:border-white/25 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

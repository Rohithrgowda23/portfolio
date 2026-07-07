import { motion } from "framer-motion";
import { Star, GitFork, GitCommitHorizontal } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { useCountUp } from "../../hooks/useCountUp";

const GH_STATS = [
  { value: 480, suffix: "+", label: "Contributions this year", icon: GitCommitHorizontal },
  { value: 14, suffix: "", label: "Public repositories", icon: GitFork },
  { value: 9, suffix: "", label: "Stars earned", icon: Star },
];

const LANGUAGES = [
  { name: "Java", pct: 45, color: "#2563EB" },
  { name: "TypeScript", pct: 25, color: "#7C3AED" },
  { name: "JavaScript", pct: 15, color: "#06B6D4" },
  { name: "SQL", pct: 10, color: "#60a5fa" },
  { name: "Other", pct: 5, color: "#9CA3AF" },
];

function StatBlock({ value, suffix, label, icon: Icon }: (typeof GH_STATS)[number]) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <div ref={ref} className="glass rounded-xl2 p-7 text-center">
      <Icon className="mx-auto text-accent" size={22} />
      <p className="mt-4 font-display text-3xl font-semibold">
        {animated}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}

export default function GithubStats() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Open Source"
          title="Building in public, one commit at a time."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {GH_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <StatBlock {...s} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-8 glass rounded-xl2 p-8"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6">
            Language breakdown
          </p>
          <div className="w-full h-3 rounded-full overflow-hidden flex">
            {LANGUAGES.map((l) => (
              <div
                key={l.name}
                style={{ width: `${l.pct}%`, backgroundColor: l.color }}
                className="h-full first:rounded-l-full last:rounded-r-full"
              />
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {LANGUAGES.map((l) => (
              <div key={l.name} className="flex items-center gap-2 text-sm text-muted">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: l.color }}
                />
                {l.name} <span className="font-mono text-xs">{l.pct}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

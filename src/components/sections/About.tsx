import { motion } from "framer-motion";
import profileImage from "../../assets/profile.jpg";
import { SITE, STATS } from "../../constants";
import SectionHeading from "../ui/SectionHeading";
import { useCountUp } from "../../hooks/useCountUp"


function StatCard({ value, suffix, label, isText }: (typeof STATS)[number]) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <div ref={ref} className="glass rounded-2xl p-6">
      <p className="font-display text-3xl md:text-4xl font-semibold text-gradient">
        {isText ? "AI+FS" : `${animated}${suffix}`}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="About"
          title="Engineering reliable systems, one service at a time."
        />

        <div className="mt-16 grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-xl3 overflow-hidden border-gradient shadow-soft">
              <img
                  src={profileImage}
                  alt="Rohith R Gowda"
                  className="w-full h-full object-cover"
                  loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 shadow-soft hidden sm:block">
              <p className="font-mono text-[11px] text-muted">Based in</p>
              <p className="font-display text-lg font-semibold">{SITE.location}</p>
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              I'm a Java Full Stack Developer who builds systems from the database
              up: Spring Boot services underneath, React interfaces on top, and
              generative AI woven through both when it earns its place. My
              internship at JupiterKings Technologies sharpened how I think about
              REST APIs, authentication, and shipping software that behaves
              predictably in production &mdash; not just in a demo.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-muted leading-relaxed"
            >
              I'm currently looking for a Java Full Stack Developer or Software
              Engineer role where I can keep building backend-heavy, AI-assisted
              products with people who care about craft as much as I do.
            </motion.p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <StatCard {...stat} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

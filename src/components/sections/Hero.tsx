import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";
import { initHeroScene } from "../../animations/heroScene";
import { ROLE_WORDS, SITE } from "../../constants";
import MagneticButton from "../ui/MagneticButton";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const cleanup = initHeroScene(containerRef.current);
    return cleanup;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROLE_WORDS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const nameLines = ["HELLO,", "I'M", "ROHITH", "R", "GOWDA."];

  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-20">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-grad-radial-glow pointer-events-none" />
      <div
        ref={containerRef}
        className="absolute inset-0 opacity-70"
        aria-hidden
      />
      <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-20 w-[28rem] h-[28rem] bg-secondary/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xs uppercase tracking-[0.35em] text-accent mb-6"
          >
            Available for Java Full Stack roles &middot; {SITE.location}
          </motion.p>

          <h1 className="font-display font-semibold leading-[0.92] text-[clamp(2.75rem,8vw,6.5rem)] tracking-tight">
            {nameLines.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`block ${i === 3 ? "text-gradient" : ""}`}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <div className="h-10 mt-7 font-mono text-lg md:text-xl text-muted">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="inline-block"
              >
                {ROLE_WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 max-w-xl text-muted text-lg leading-relaxed"
          >
            {SITE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#work">View Projects</MagneticButton>
            <MagneticButton href={SITE.resumeUrl} variant="ghost">
              <Download size={16} /> Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              <Send size={16} /> Hire Me
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: floating workspace card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-xl3 border-gradient glass p-8 shadow-soft animate-float">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="ml-auto font-mono text-[11px] text-muted">
                ResumeAnalyzer.java
              </span>
            </div>
            <pre className="font-mono text-[13px] leading-relaxed text-muted overflow-hidden">
{`@RestController
@RequestMapping("/api/resume")
public class ResumeController {

  @PostMapping("/analyze")
  public ATSResult analyze(
      @RequestBody Resume resume) {
    var score = aiService
      .scoreAgainst(resume, job);
    return score.withGapAnalysis();
  }
}`}
            </pre>
          </div>

          <div className="absolute -bottom-8 -left-10 glass rounded-2xl px-5 py-4 shadow-soft animate-float" style={{ animationDelay: "1.5s" }}>
            <p className="font-mono text-[11px] text-muted">ATS Score</p>
            <p className="font-display text-2xl font-semibold text-gradient">92%</p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}

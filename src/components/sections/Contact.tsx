import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Download, Loader2, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import SectionHeading from "../ui/SectionHeading";
import MagneticButton from "../ui/MagneticButton";
import { SITE } from "../../constants";
import { sendContactMessage } from "../../services/emailService";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    setStatus("sending");
    try {
      await sendContactMessage({ name, email, message });
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="relative py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Let's build something reliable together."
          description="Open to Java Full Stack Developer and Software Engineer roles — reach out directly or send a message below."
        />

        <div className="mt-16 grid md:grid-cols-[1fr_1.3fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="glass rounded-xl2 p-8 flex flex-col gap-6"
          >
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 group">
              <span className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs text-muted">Email</p>
                <p className="font-medium group-hover:text-accent transition-colors break-all">
                  {SITE.email}
                </p>
              </div>
            </a>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-4 group">
              <span className="w-11 h-11 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center shrink-0">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs text-muted">Phone</p>
                <p className="font-medium group-hover:text-accent transition-colors">{SITE.phone}</p>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/rohithrgowda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <span className="w-11 h-11 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shrink-0">
                <LinkedinIcon size={18} />
              </span>
              <div>
                <p className="text-xs text-muted">LinkedIn</p>
                <p className="font-medium group-hover:text-accent transition-colors">/in/rohithrgowda</p>
              </div>
            </a>
            <a
              href="https://github.com/Rohithrgowda23"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <span className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                <GithubIcon size={18} />
              </span>
              <div>
                <p className="text-xs text-muted">GitHub</p>
                <p className="font-medium group-hover:text-accent transition-colors">/Rohithrgowda23</p>
              </div>
            </a>

            <MagneticButton href={SITE.resumeUrl} variant="ghost" className="mt-2 w-full">
              <Download size={16} /> Download Resume
            </MagneticButton>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="glass rounded-xl2 p-8 flex flex-col gap-5"
          >
            <div>
              <label htmlFor="name" className="text-xs text-muted mb-2 block">Name</label>
              <input
                id="name"
                name="name"
                required
                type="text"
                placeholder="Your name"
                className="w-full bg-surface/60 border border-line rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs text-muted mb-2 block">Email</label>
              <input
                id="email"
                name="email"
                required
                type="email"
                placeholder="you@company.com"
                className="w-full bg-surface/60 border border-line rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs text-muted mb-2 block">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell me about the role or project..."
                className="w-full bg-surface/60 border border-line rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <MagneticButton type="submit" className="w-full justify-center">
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : status === "sent" ? (
                <>
                  <CheckCircle2 size={16} /> Message sent
                </>
              ) : (
                "Send Message"
              )}
            </MagneticButton>

            {status === "error" && (
              <p className="text-xs text-red-400">{errorMsg}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

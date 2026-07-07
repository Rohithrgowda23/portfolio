import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { SITE } from "../../constants";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="relative border-t border-line py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {SITE.name}. Built with intent.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/rohithrgowda23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/rohithrgowda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:rohithrgowda23@gmail.com"
            className="text-muted hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs text-muted hover:text-white transition-colors group"
        >
          Back to top
          <span className="w-8 h-8 rounded-full border border-line flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
            <ArrowUp size={14} />
          </span>
        </button>
      </div>
    </footer>
  );
}

import { useRef, useState } from "react";
import type { ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  type?: "button" | "submit";
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.35, y: y * 0.35 });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-colors duration-300 whitespace-nowrap";

  const variantClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-glow hover:shadow-[0_0_80px_-10px_rgba(124,58,237,0.6)]"
      : "border border-white/15 text-white hover:border-white/40 hover:bg-white/5";

  const Comp = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
    >
      <Comp
        href={href}
        onClick={onClick}
        type={!href ? type : undefined}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        {children}
      </Comp>
    </motion.div>
  );
}

import { useMousePosition } from "../../hooks/useMousePosition";

export default function CursorGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block transition-opacity duration-500"
      style={{
        background: `radial-gradient(500px circle at ${x}px ${y}px, rgba(37,99,235,0.10), transparent 70%)`,
      }}
      aria-hidden
    />
  );
}

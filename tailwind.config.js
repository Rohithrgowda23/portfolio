/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#09090B",
        surface: "#111827",
        surface2: "#161b28",
        primary: "#2563EB",
        secondary: "#7C3AED",
        accent: "#06B6D4",
        ink: "#FFFFFF",
        muted: "#9CA3AF",
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
        "grad-accent": "linear-gradient(135deg, #06B6D4 0%, #2563EB 100%)",
        "grad-radial-glow":
          "radial-gradient(circle at center, rgba(37,99,235,0.25) 0%, rgba(9,9,11,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(37,99,235,0.45)",
        soft: "0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      borderRadius: {
        xl2: "1.75rem",
        xl3: "2.5rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseSlow: {
          "0%,100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulseSlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#07111f",
        graphite: "#111827",
        steel: "#334155",
        smoke: "#94a3b8",
        orange: "#f97316",
        warning: "#facc15",
        acid: "#a3e635",
        vapor: "#38bdf8",
        ammonia: "#c084fc",
        particle: "#e2e8f0"
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)",
        hazard:
          "repeating-linear-gradient(135deg, rgba(250, 204, 21, .9) 0 12px, rgba(17, 24, 39, .95) 12px 24px)"
      },
      boxShadow: {
        panel: "0 24px 80px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 35px 120px rgba(56, 189, 248, 0.12)",
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top, rgba(56,189,248,0.18), transparent 45%), radial-gradient(circle at right, rgba(245,158,11,0.12), transparent 25%)",
      },
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        }
      }
    }
  },
  plugins: []
};

export default config;

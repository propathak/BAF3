import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0F",
        surface: "#111318",
        text: "#F5F5F7",
        sub: "#A1A1AA",
        neon: "#FFD23F",
        lavender: "#A78BFA",
        pink: "#FF4D8D"
      },
      borderRadius: {
        blob: "24px"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.45)",
        glow: "0 0 0 2px rgba(255,210,63,0.25)"
      }
    },
  },
  plugins: [],
} satisfies Config;

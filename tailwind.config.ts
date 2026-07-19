import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#120F0D",
        "ink-2": "#1C1815",
        "ink-3": "#241F1B",
        paper: "#F3EDE1",
        text: "#F5F1E9",
        muted: "#A69C8D",
        signal: "#FF3D6E",
        data: "#5B4CFF",
        line: "#2C2620",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;

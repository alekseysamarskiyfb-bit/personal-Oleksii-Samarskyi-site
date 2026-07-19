import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0C0F",
        "ink-2": "#141519",
        "ink-3": "#1B1D22",
        paper: "#F2F1ED",
        text: "#F2F1ED",
        muted: "#8A8D93",
        signal: "#C9A961",
        data: "#8A8D93",
        line: "#24262B",
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

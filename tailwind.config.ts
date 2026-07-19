import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14171C",
        "ink-2": "#1B1F26",
        "ink-3": "#20242C",
        paper: "#EDE9DF",
        text: "#ECE9E2",
        muted: "#8B93A1",
        signal: "#FF4A2E",
        data: "#6C8CFF",
        line: "#262B34",
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

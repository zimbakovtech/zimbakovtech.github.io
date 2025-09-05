/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Poppins",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "Consolas",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Liberation Mono",
          "monospace",
        ],
      },
      colors: {
        bg: "#0f1219",
        surface: "#181c24",
        "surface-elevated": "#212630",
        primary: "#23365c",
        "primary-hover": "#2a416e",
        accent: "#23a8a8",
        "accent-hover": "#28bdbd",
        muted: "#8b93a1",
        "text-primary": "#e6e6e9",
        "text-secondary": "#9ca3af",
        border: "#2b303a",
      },
      boxShadow: {
        glass: "0 8px 30px rgba(0,0,0,0.25)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

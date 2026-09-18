/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      gradientColorStops: ({ theme }) => theme("colors"),
      fontSize: {
        h1: ["3.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h2: ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h3: ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h4: ["2rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        h5: ["1.5rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        h6: ["1.25rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        large: ["1.25rem", { lineHeight: "1.5" }],
        medium: ["1.125rem", { lineHeight: "1.5" }],
        regular: ["1rem", { lineHeight: "1.5" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        tiny: ["0.75rem", { lineHeight: "1.5" }],
      },
      colors: {
        brand: {
          500: "#7d5ba6",
          gold: "#aca33d",
        },
        "neutral-darkest": "#7d5ba6",
        scheme: {
          background: "#ffffff",
          foreground: "#ffffff",
          text: "#1f1b22",
          border: "#7d5ba6",
          "btn-text": "#ffffff",
        },
      },
      borderRadius: {
        button: "9999px",
        card: "0rem",
        image: "0rem",
        form: "0rem",
        badge: "0rem",
        checkbox: "0rem",
        carousel: "0rem",
        dropdown: "0rem",
      },
    },
  },
};

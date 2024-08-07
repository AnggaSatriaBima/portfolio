/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {},
    letterSpacing: {
      spaci: ".5em",
    },
    screens: {
      "2xl": "1320px",
    },
  },
  plugins: [],
};

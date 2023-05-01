/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "body-bg-color": "#0e1013",
      "text-color": "#fefefe",
      "bg-cards": "#282a2d",
      "bg-techs": "#9338f4",
      "text-techs": "#ffffff",
      javascript: "#f1e05a",
      typescript: "#3178c6",
      css: "#563d7c",
      html: "#e34c26",
    },
    extend: {
      fontFamily: {
        merriweather: "Merriweather Sans, sans-serif",
      },
    },
  },
  plugins: [],
};

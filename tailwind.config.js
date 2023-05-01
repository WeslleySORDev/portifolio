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
    },
    extend: {
      fontFamily: {
        "merriweather": "Merriweather Sans, sans-serif",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // Just-In-Time mode for better performance
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode using class
  theme: {
    extend: {},
    colors: {
      light: "#fff",
      "primary-text": "#111517",
      "background-light": "hsl(0, 0%, 98%)",
      "background-dark": "#202c37",
      "dark-elements": " #2b3945",
      "light-input": "hsl(0, 0%, 52%)",
      "light-elements": "#ffffff",
    },
  },
  plugins: [],
};

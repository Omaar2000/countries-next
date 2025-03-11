/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // Just-In-Time mode for better performance
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode using class
  theme: {
    extend: {},
  },
  plugins: [],
};

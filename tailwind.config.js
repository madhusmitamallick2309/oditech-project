/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 enables dark mode using .dark class
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

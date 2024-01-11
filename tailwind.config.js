/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-geist-mono)'],
      },
      screens: {
        xs: "330px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@headlessui/tailwindcss")],
};

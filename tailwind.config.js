/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { max: "900px" }, 
      smmobile: { max: "600px" }, 
    },

    extend: {},
  },
  plugins: [],
};
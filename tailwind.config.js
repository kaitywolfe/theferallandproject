/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // add Fjalla One font 
      // and Pochaevsk font for the default sans-serif font
      'fjalla': ['Fjalla One', 'Pochaevsk'],
      'sans': ['Pochaevsk'],
    },
    extend: {},
  },
  plugins: [],
}


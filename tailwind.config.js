/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pr: "#791526",
        sr:"#F8C967",
        txt: "#120D26",
        suc: '#3CD670',
        hvr:'rgba(228, 228, 228, 0.1)',

      }
    },
  },
  plugins: [],
}

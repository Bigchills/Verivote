
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm':'320px',
        'mobile':'450px',
        'md':'780px',
        'lg':'1024px',
        'xl':'1440px'
      },
      colors: {
        darkBase: '#140535',
        purpleAccent: '#43145F',
      },
      backgroundImage: {
        'custom-bg': "url('public/Images/heroimg.svg')",
      },
    },
  },
  plugins: [],
}

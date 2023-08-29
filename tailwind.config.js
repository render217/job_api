/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgMain:"#F6F7FB",
        cblue:"#1E86FF",
        cdeepblue:"#334680",
        cgray:"#B9BDCF",
        cblack:"#282538"
      },
      fontFamily:{
        "Roboto":['Roboto','sans-serif'],
        "Poppins":['Poppins','sans-serif']
      }
    },
  },
  plugins: [],
}
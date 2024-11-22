/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "input-box":"#E9E9E1"
      },
      height:{
        "signup-box":"fit-content"
      },
      width:{
        "signup-box":"388px",
        "Input-box":"350px"
      },
      fontFamily:{

      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        200: "200px",
        300: "300px",
        440: "440px",
        620: "620px",

        "49%": "49%",

        "calc(-20)": "calc(100% - 20px)",

        main: "calc(100% - 300px - 20px - 20px);",
      },

      height: {
        200: "200px",
        700: "700px",

        "54px": "54px",

        "calc(-20)": "calc(100% - 20px)",
      },

      minWidth: {
        "75vw": "75vw",
        1024: "1024px",
      },

      colors: {
        gray: {
          DEFAULT: "#222222",
          1: "#e0e0e0",
          2: "#999999",
        }
      },

      cursor: { p: "pointer", },

      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px",
        lg: "18px",
        xl: "25px",
      },
    },
  },
  plugins: [],
}


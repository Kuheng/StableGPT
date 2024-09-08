/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        200: "200px",
        300: "300px",
        440: "440px",
        560: "560px",
        640: "640px",

        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "55px": "55px",
        "80px": "80px",
        "100px": "100px",
        "130px": "130px",
        "150px": "150px",
        "200px": "200px",
        "300px": "300px",
        "500px": "500px",
        "800px": "800px",

        "49%": "49%",
        "50%": "50%",
        "60%": "60%",
        "75%": "75%",

        "98vw": "98vw",

        "calc(-20)": "calc(100% - 20px)",
        "calc(-40px)": "calc(100% - 40px)",
        "calc(-100px)": "calc(100% - 100px)",

        main: "calc(100% - 300px - 20px - 20px);",

      },

      height: {
        200: "200px",
        700: "700px",

        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "55px": "55px",
        "60px": "60px",
        "70px": "70px",
        "80px": "80px",
        "100px": "100px",
        "150px": "150px",
        "300px": "300px",
        "640px": "640px",

        "calc(-20)": "calc(100% - 20px)",
        "calc(-40px)": "calc(100% - 40px)",
        "calc(-100px)": "calc(100% - 100px)",
        "calc(-150px)": "calc(100% - 150px)",
        "calc(-300px)": "calc(100% - 300px)",
      },

      minWidth: {
        "75vw": "75vw",
        1024: "1024px",
      },

      maxHeight: {
        "640px": "640px",
        
        "calc(-150px)": "calc(100% - 150px)",
      },

      inset: {
        "5px": "5px",
        "8px": "8px",
        "10px": "10px",
        "15px": "15px",
        "18px": "18px",
        "20px": "20px",
        "25px": "25px",
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "80px": "80px",
        "90px": "90px",
        "100px": "100px",
        "400px": "400px",
        "500px": "500px",

        "20%": "20%",
        "40%": "40%",
        "48%": "48%",
      },

      margin: {
        "10px": "10px",
        "20px": "20px",
        "200px": "200px",
        "330px": "330px",
        "450px": "450px",
        "500px": "500px",
      },

      padding: {
        "5px": "5px",
        "10px": "10px",
        "15px": "15px",
        "20px": "20px",
        "30px": "30px",
        "40px": "40px",
        "55px": "55px",
      },

      borderWidth: {
        1: "1px",
        10: "10px",
        24: "24px",
        100: "100px",
      },

      borderRadius: {
        "2px": "2px",
        "5px": "5px",
        "10px": "10px",
        "15px": "15px",
        "20px": "20px",

        "50%": "50%",
      },

      colors: {
        gray: {
          DEFAULT: "#222222",
          1: "#e0e0e0",
          2: "#999999",
          3: "#a2a2a2",
          4: "#939393",
          5: "#d2d2d2",
          6: "#f2f2f2",
          7: "#626262",
          8: "#b1b1b1",
          9: "#c2c2c2",
        },
        blue: {
          DEFAULT: "#0000FF",
          1: "#3a6fd2",
          2: "#1d4287",
        },
        white: {
          DEFAULT: "#ffffff",
          1: "#cad4e6",
          2: "#eeeeee",
        },
        modal: "#000000B0"
      },

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


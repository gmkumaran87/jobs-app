/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      container: {
        center: true,
        /* padding: {
        sm: '1rem',
        lg: '1.25rem',
        xl: '1.5rem'
      }, */
        screens: {
          md: "730px",
          lg: "940px",
          xl: "1220px",
        },
      },
      colors: {
        white: {
          background: "rgb(247, 248, 251)",
          100: "#fff",
        },
        gray: {
          borderColor: "rgba(230, 230, 230, 1)",
          para: "rgba(122, 122, 122, 1)",
        },
        blue: {
          primary: "rgba(21, 151, 228, 0.83)",
        },
        red: {
          error: "#D86161",
        },
        black: {
          dark: "rgba(33, 33, 33, 1)",
          normal: "rgba(33, 36, 39, 1)",
          0: "#000",
        },
      },
    },
  },
  plugins: [],
};

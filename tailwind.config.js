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
        },
      },
    },
  },
  plugins: [],
};

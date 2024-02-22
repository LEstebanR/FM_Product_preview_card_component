/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "hsl(30, 38%, 92%)",
        gray: "hsl(228, 12%, 48%)",
        primary: "hsl(158, 36%, 37%)",
      },
      maxHeight: {
        100: "30rem",
      },
      maxWidth: {
        100: "38rem",
      },
      height: {
        90: "75%",
        100: "28rem",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        frauces: ["Fraunces"],
      },
    },
  },
  plugins: [],
};

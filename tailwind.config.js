/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F2EAE2",
      },
      maxHeight: {
        100: "30rem",
      },
      maxWidth: {
        100: "38rem",
      },
    },
  },
  plugins: [],
};

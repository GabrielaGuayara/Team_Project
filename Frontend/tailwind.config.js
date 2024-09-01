/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      volunteer: "url('./assets/volunteer.jpg')",
    },
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 
  theme: {
      colors: {
        'yellow': '#DCB03F',
        'red': '#A5322B',
        'lightBlue': '#DAECF9',
        'white': '#FFFFFF',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'green': "#347928"
      },
    },
  plugins: [require("daisyui")],
};

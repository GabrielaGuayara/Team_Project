/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 
  theme: {
<<<<<<< HEAD
      colors: {
        'yellow': '#DCB03F',
        'red': '#A5322B',
        'lightBlue': '#DAECF9',
        'white': '#FFFFFF',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
    },
=======
    backgroundImage: {
      volunteer: "url('./assets/volunteer.jpg')",
    },
  },
>>>>>>> 3c1dc39a0edd5df98c230ef86fe15a89b4282577
  plugins: [require("daisyui")],
};

const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      fontFamily: {
        inter: '"Inter", sans-serif',
        Prata: '"Prata", serif',
        Inter: '"Inter", sans-serif'
      },
      colors: {
        primary: '#007BFF',
        secondary: '#6B7280',
        
      },
    },
  },
  plugins: [flowbite.plugin(),require('daisyui')],
}
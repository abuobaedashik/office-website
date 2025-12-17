/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Ysabeau SC"', "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        BBH:["BBH Hegarty", "sans-serif"]
      },
       backgroundImage: {
      'hero-gradient': 'linear-gradient(to right, #ffff00, #1e90ff)',
    },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"], 
  },
}


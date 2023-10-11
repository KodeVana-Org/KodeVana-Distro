/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    backgroundImage: {
      'img_name': "url('../path')",
    },
    
    extend: {
      screens: {
        'xs': '350px',
      },
    },
  },
  plugins: [],
}

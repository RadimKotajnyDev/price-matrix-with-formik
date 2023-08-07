/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#630B79',
        'secondary': '#3D1547',
        'action': '#009701'
      }
    },
  },
  plugins: [
  ],
}
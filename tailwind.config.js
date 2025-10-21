/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#1e40af', // blue-800
        secondary: '#f8fafc', // slate-50
        accent: '#3b82f6', // blue-500
      },
    },
  },
  plugins: [],
}
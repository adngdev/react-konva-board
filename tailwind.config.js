/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'height-lib': 'calc(100vh - 200px)'
      }
    },
  },
  plugins: [],
}


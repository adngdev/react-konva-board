/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['Poppins', 'sans-serif'],
        transitional: ['Inter', 'sans-serif'],
        monospace: ['monospace', 'sans-serif'],
        courier: ['courier', 'sans-serif'],
        calibri: ['calibri', 'sans-serif'],
        tahoma: ['tahoma', 'sans-serif'],
        trebuchet: ['Trebuchet MS', 'sans-serif'],
        cursive: ['cursive', 'sans-serif'],
        impact: ['Impact', 'sans-serif'],
        georgia: ['Georgia', 'sans-serif']
      },
      height: {
        'sidebar': 'calc(100vh - 65px)',
        'lib': 'calc(100vh - 200px)'
      },
      fontSize: {
        '2xs': ['0.625rem', '0.75rem']
      },
    },
  },
  plugins: [],
}


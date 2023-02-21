/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
// ​
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '350px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px'
    },
    colors: {
      'very-dark-blue': 'hsl(209, 26%, 17%)',
      'very-light-gray': 'hsl(0, 0%, 98%)'
    },
    extend: {},
  },
  plugins: [],
}

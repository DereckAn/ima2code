/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Esto lo puso shadcn 
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/flowbite-react/lib/**/*.js",
    "./public/**/*.html",
	],
  theme: {
    extend: {
      colors: {
        primary:'#003554',
        secondary:'#0f4c5c',
        tertiary:'#3d7b80',
        fourth: '#ff6663'
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("flowbite/plugin")],
}
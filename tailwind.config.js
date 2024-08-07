/** @type {import('tailwindcss').Config} */
export default { 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {

      colors: {
        primary: "#5C059b",
        secondary: "#1E293B",
        accent: "#014BA0",
    },
  },
  plugins: [],
}
}

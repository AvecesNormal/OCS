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
        'primary': '#333333',
        'secondary': '#f2f2f2',
        'tertiary': '#00274c',
        'quaternary': '#FFFFFF',
        'quinary': '#666666',
    },
  },
  plugins: [],
}
}

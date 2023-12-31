/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'bannerImage': "url('/src/assets/Banner.jpg')",
    },
    fontFamily: {
      'openSans': ['Open Sans', 'sans-serif'],
      'Nunito': ['Nunito', 'sans-serif'],
    },
  plugins: [],
}
}

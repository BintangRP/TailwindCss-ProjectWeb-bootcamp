/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {},
    fontFamily: {
      'header': ['DM Sans', 'sans-serif'],
    },
    backgroundImage: {
      'foto1': "url('/assets/gambar/item.png')",
      'foto2': "url('/assets/gambar/item1.png')",
      'foto3': "url('/assets/gambar/item2.png')",
      'foto4': "url('/assets/gambar/item3.png')",
    }
  },
  plugins: [],
}
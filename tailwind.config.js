module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bg-main": "#141316",
        "main": "#37b7b1",
        "main-hover": "#22bdb5",
        "hover-main": "#32a8a2",
        "discord": "#5865F2"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

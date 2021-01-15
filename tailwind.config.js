module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/static/img/hero.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

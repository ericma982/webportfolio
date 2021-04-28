module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home-page': "url('/images/blackMovingCircle.gif')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
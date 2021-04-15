module.exports = {
  purge: ["./src/**/*.{html,scss}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'darkGreen': 'hsl(216, 65%, 11%)',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        'white': '#e6f1ff',
        'green': '#64ffda',
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
};

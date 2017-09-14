// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    'postcss-import': {
      addDependencyTo: require('webpack')
    },
    'postcss-cssnext': {
      browsers: [
        "> 1%",
        "last 2 versions",
        "not ie <= 8"
      ]
    }
  }
}

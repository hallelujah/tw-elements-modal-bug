const content =  [
  './src/*.js',
  './index.html',
  './node_modules/tw-elements/dist/src/**/*.js',
]

module.exports = {
  content: content,
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('tw-elements/dist/src/js/plugin'),
  ],
  darkMode: 'class',
}


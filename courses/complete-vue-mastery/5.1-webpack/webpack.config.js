// To run webpack, run
// ./node_modules/.bin/webpack
// or
// npm start

module.exports = {

  // By default, Webpack looks for a /src/index.js file
  // You can set up multiple entry points
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },

  // Better put it into the CLI command
  // mode: 'development',

};

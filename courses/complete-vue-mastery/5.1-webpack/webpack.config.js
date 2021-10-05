// To run webpack, run ./node_modules/.bin/webpack or npm start

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

  // Set up 3rd-party modules here
  module: {
    rules: [

      // Process any JavaScript file with Babel
      {
        test: /\.js%/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },

    ],
  },

};

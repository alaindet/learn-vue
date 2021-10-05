const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

      // Process SCSS files
      {
        test: /\.scss$/,
        // Loaders run in reverse order
        use: [
          MiniCssExtractPlugin.loader, // This runs last (extract .css file)
          // 'style-loader', // This runs last (inlines <style> in <head>)
          'css-loader', // This runs second
          'sass-loader', // This runs first
        ],
      },

    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],

};

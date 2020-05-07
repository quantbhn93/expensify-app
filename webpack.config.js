const path = require('path');

module.exports = (env) => {

  const isProduction = env === 'production';

  return {
    entry: './src/app.js',
    // entry: './src/playground/hoc.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loaders: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,  // load css file and scss file
          use: [
            'style-loader', //  2. attach to the DOM
            'css-loader', // 1. read css file from source
            'sass-loader' // 0. load sass into css (use node sass to load file)
          ]
        }
      ]
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
};
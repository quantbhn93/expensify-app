const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {

  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('style.css');

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
          use: CSSExtract.extract({
            use: [
              'css-loader',
              'sass-loader'
            ]
          })
          // use: [
          //   'style-loader', //  2. attach inline to the DOM
          //   'css-loader', // 1. read css file from source
          //   'sass-loader' // 0. load sass into css (use node sass to load file)
          // ]
        }
      ]
    },
    plugins: [
      CSSExtract
    ],
    // setup devtool: source map for Javascript
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
};
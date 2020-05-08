const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {

  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('style.css');

  return {
    entry: './src/app.js',
    // entry: './src/playground/hoc.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'), // public/dist/bundle.js
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
              {
                loader: 'css-loader', // https://webpack.js.org/loaders/css-loader/
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
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
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      // devServer does not write to the file system. So when view page on browser
      // we see that it loads file from /dist/style.css or /dist/bundle.js for example 
      // but on our disk (local machine), the /dist folder does not actually exist
      // dist folder ONLY generated when we run `npm run build:prod` for example
      publicPath: '/dist/' 
    }
  }
};
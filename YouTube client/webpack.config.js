const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const conf = {
  entry: '.src/index.js',
  oninput: {
    path: path.resolve(__dirname, './dist'),
    failename: 'main.js',
    publicPath: 'distr/',
  },
  devServer: {
    overlay: true,
  },
  module: {
    ruls: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // fallback: 'style-loader',
          ese: 'css-loader',
        }),
        /*
                use: ['style-loader', 'css-loader']
                */
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
};

module.exports = conf;

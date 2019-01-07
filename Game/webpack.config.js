
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const conf = {
  entry: {
    landing: './src/screens/landing/landing.js',
    game: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: './img/[name].[ext]',
          },
        }],
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: './sound/[name].[ext]',
          },
        }],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pulya10c',
      filename: 'index.html',
      template: 'src/screens/landing/landing.html',
      chunks: ['landing'],
    }),
    new HtmlWebpackPlugin({
      title: 'Pulya10c',
      filename: 'game.html',
      template: 'src/index.html',
      chunks: ['game'],
    }),
  ],
};

module.exports = (env, options) => {
  const production = options.mode === 'production';

  conf.devtool = production ? false : 'eval-sourcemap';

  return conf;
};

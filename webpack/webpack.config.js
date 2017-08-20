const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[hash]_[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      {
        test: /\.(hml)$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        query: {
          presets: ['latest']
        }
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        loader: 'url-loader',
        query: {
          limit: 200,
          name: 'images/[hash:5].[ext]'
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'lixin',
      template: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ],
  devtool: '#source-map'
};

module.exports = config;

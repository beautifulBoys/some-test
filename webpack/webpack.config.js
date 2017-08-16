const path = require('path');
const config = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
      filename: "index.html",
      publicPath: "/dist/",
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      console: true,
      stats: {colors: true}
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader?name=lib/[name].[ext]?[hash]'
      },
      {
        test: /\.(hml)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: '#source-map'
};

module.exports = config;

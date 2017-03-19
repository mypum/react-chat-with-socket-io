const path = require('path');
const webpack = require('webpack');

devtool: 'cheap-module-eval-source-map',

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src/client.js')
  ],

  output: {
    publicPath: '/build/',
    path: path.join(process.cwd(), 'static', 'build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules|\.git/,
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]

}

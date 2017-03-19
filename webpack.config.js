const path = require('path')
const webpack = require('webpack')

devtool: 'cheap-module-eval-source-map',

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(process.cwd(), 'src/styles/main.scss'),
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
        exclude: /node_modules|\.git/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              module: true,
              importLoaders: 1,
              sourceMap: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [
                path.join(process.cwd(), 'src/styles')
              ]
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]

}

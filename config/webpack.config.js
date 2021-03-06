const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_DIRECTORY = path.join(__dirname, '..');
const SRC_DIRECTORY = path.join(ROOT_DIRECTORY, 'src');

const config = {
  entry: [path.resolve(__dirname, '../src/index.js')],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  resolve: {
    modules: [path.resolve('node_modules'), 'node_modules']
  },
  performance: {
    hints: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_DIRECTORY, 'index.html')
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}

module.exports = config;
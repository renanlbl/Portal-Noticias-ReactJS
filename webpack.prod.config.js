const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, 'src', 'indexBuild'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[id].css'
    }),
    new npm({
      template: "./index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

    new webpack.optimize.OccurrenceOrderPlugin()
  ],

  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      use: [{
        loader: 'babel-loader'
      }]

    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      include: /src/,
      use: [
        MiniCssExtractPlugin.loader, 
        "css-loader"
    ]
    },
    { test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
      'file-loader',
      {
          loader: 'image-webpack-loader',
          options: {
          bypassOnDebug: true, // webpack@1.x
          disable: true, // webpack@2.x and newer
          },
      },
      ]
    }
  ]
    
  },
  performance: {
    hints: false
  },
  optimization: {
    minimizer: [
          // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: true,
          warnings: false
        },
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
}

// devtool: 'source-map',
//     entry: './src/index.js',
//     output: {
//         path: __dirname + '/dist',
//         filename: 'bundle.js'
//     },
//     devServer: {
//         port: 8080,
//         contentBase: './dist'
//     },

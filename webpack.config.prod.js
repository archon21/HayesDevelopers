const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = () => ({
  mode: 'production',
  entry: {
    vendor: ['react'],
    bundle: ['@babel/polyfill', './client/index.js'],
    style: './public/style.scss'
  },
  target: 'web',

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public', 'js'),
    chunkFilename: '[id].[chunkhash].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve('./node_modules'), './public/scss']
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-loader'
      },
      {
        test: /\.(png|gif|jpg|jpeg|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }
    ]
  },
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       cache: true,
  //       parallel: true,
  //       sourceMap: false // set to true if you want JS source maps
  //     }),
  //     new OptimizeCSSAssetsPlugin({
  //       cssProcessorOptions: {
  //         discardComments: {
  //           removeAll: true
  //         }
  //       }
  //     })
  //   ]
  // },
  plugins: [
    //   // new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({ filename: 'css/style.css' })
  ]
});

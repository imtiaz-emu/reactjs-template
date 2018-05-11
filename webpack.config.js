var path = require('path');

var DIST_DIR = path.resolve('dist');
var SRC_DIR = path.resolve('src');

var config = {
  entry: {
    bundle: SRC_DIR + '/app/index.js'
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js'
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './src',
    port: 9000,
    open: true,
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "env", "stage-2"]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {test: /.scss$/},
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
};

module.exports = config;

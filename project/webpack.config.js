const path = require('path');

const PATHS = {
  app: "./containers/app",
  build: path.join(__dirname, 'build')
};

module.exports = {
  devtool: 'source-map',
  entry: {
    app: PATHS.app
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },

  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  }
};

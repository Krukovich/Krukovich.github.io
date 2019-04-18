const path = require('path');
 
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './js/')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
      }
    ]
  },
  devtool: "source-map"
};


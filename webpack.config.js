const path = require('path');

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }],
  },
};

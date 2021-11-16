const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  watch: true , 
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'navimation.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
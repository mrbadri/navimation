const path = require('path');

module.exports = {
  taget: "web",
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
    library: 'navimation', 
    libreryTaget: 'umd',
    globalObject: 'this',
    umdNameDefine: true,
  },
};
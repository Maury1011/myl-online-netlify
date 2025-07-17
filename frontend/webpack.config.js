const path = require('path');

module.exports = {
  entry: './src/index.js', // o el path correcto a tu archivo principal
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 8080,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,   // archivos que termina en .js o .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // para que puedas importar sin poner extensión
  },
};

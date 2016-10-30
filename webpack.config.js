
module.exports = {
  entry: './client/main.js',
  output: {
    path: './dist/',
    filename: 'bundle2000.js',
    publicPath: "/assets/",
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

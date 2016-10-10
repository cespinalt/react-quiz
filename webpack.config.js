module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'app/js/bundle.js'
  },
  loaders: [
    {
      loader: 'babel-loader',
      exclude: 'node_modules',
      query: {
        presets: ['es2015', 'react']
      },
    }
  ]
}

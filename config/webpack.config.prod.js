module.exports = {
  mode: 'production',
  entry: '../client/index.js',
  output: {
    path: __dirname,
    filename: '../public/bundle.js'
  },
  context: __dirname,
  node: {fs: 'empty'},
  externals: [
    {'./cptable': 'var cptable'},
    {'./jszip': 'jszip'}
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {test: /\.(gif|png|jpe?g|svg|pdf)$/i,
        loader: 'url-loader?limit=10000&fallback=file-loader&name=[name].[ext]'
      },
    ]
  },
};


const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.jsx', '.js', '.json', '*'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ]
  },
  entry:  path.resolve(__dirname,'../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js'

  },

  node: { fs: 'empty' },
  optimization: {
    namedModules: true, // NamedModulesPlugin()
    splitChunks: { // CommonsChunkPlugin()
      name: 'vendor',
      minChunks: 2
    },
    noEmitOnErrors: true, // NoEmitOnErrorsPlugin
    concatenateModules: true //ModuleConcatenationPlugin
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react',
            '@babel/preset-env'
          ]
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
      {
        test: /\.(gif|png|jpe?g|svg|pdf)$/i,
        loader: 'url-loader?limit=10000&fallback=file-loader&name=[name].[ext]'
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
    //hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
};

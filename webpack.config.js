var liveReleadPlugin = require('webpack-livereload-plugin');
var path = require('path');
function getEntrySource(source) {
  // if (process.env.NODE_ENV !== 'production') {
    source.push('webpack-dev-server/client?http://localhost:8080');
    source.push('webpack/hot/only-dev-server');
  // }
  return source;
}

module.exports = {
  entry: {
    index: getEntrySource([
      './app/index.js'
    ])
  },

  output: {
    publicPath: 'http://localhost:8080/',
    filename: 'public/[name].js'
  },
  resolve: { root: [__dirname + "/styles/css", __dirname + "/app/js"] },
  module: {
    loaders: [
      {
        test: /\.(js|jsx|css)$/,
        loaders: ['react-hot', 'jsx'],
	      exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        query: {
             presets: ['react']
           },
	      exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        loaders:['style', 'css']
      },
    ]
  },
  plugins: [
    new liveReleadPlugin(),
  ],
  resolve: {
    modules: [
      path.resolve('./app'),
      path.resolve('./node_modules')
    ]
  },
};

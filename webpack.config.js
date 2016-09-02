var liveReleadPlugin = require('webpack-livereload-plugin');

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
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'jsx'],
	      exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new liveReleadPlugin(),
  ]
};

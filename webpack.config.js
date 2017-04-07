const LiveReleadPlugin = require('webpack-livereload-plugin');
const path = require('path');

function getEntrySource(source) {
  source.push('webpack-dev-server/client?http://localhost:8080');
  source.push('webpack/hot/only-dev-server');
  return source;
}

module.exports = {
  entry: {
    index: getEntrySource([
      './app/index.js',
    ]),
  },

  output: {
    publicPath: 'http://localhost:8080/',
    filename: 'public/[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react&presets[]=stage-2'],
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=img/img-[hash:6].[ext]',
      },
    ],
  },
  plugins: [
    new LiveReleadPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [path.join(__dirname, '/styles/css'), path.join(__dirname, '/app/js')],
    modules: [
      path.resolve('./app'),
      path.resolve('./app/reducers'),
      path.resolve('./node_modules'),
    ],
  },
};

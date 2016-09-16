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
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'jsx', 'babel?presets[]=es2015&presets[]=react&presets[]=stage-0'],
	      exclude: /node_modules/,
      },
      // {
      //   test: /\.(js|jsx)$/,
      //   loader: 'babel',
      //   exclude: /node_modules/,
      //   query:
      //   {
      //     presets: ['es2015',"stage-0",'react'],
      //   },
      // },
      {
        test: /\.(css)$/,
        loaders:['style', 'css']
      },
      {
        test: /\.(png|jpg)$/,
        loader: "file-loader?name=img/img-[hash:6].[ext]"
      }
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

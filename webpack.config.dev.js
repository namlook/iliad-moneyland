import webpack from 'webpack';
import path from 'path';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'),
  __DEV__: true,
};

export default {
  debug: true,
  // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps
  // and https://webpack.github.io/docs/configuration.html#devtool
  devtool: 'cheap-module-eval-source-map',
  noInfo: true, // set to false to see a list of every file being bundled.
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './frontend/index',
  ],
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    // Note: Physical files are only output by the production build task `npm run build`.
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      Promise: 'es6-promise',
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    // required to prevent multiple install of react
    fallback: [path.join(__dirname, 'node_modules')],
  },
  // Same issue, for loaders like babel
  // resolveLoader: {
  //   fallback: [path.join(__dirname, 'node_modules')],
  // },
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'frontend'),
        query: {
          presets: ['es2015', 'react', 'stage-1'],
        },
      },
      {
        loader: 'eslint',
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'frontend'),
      },
      { test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)$/i, loaders: ['file'] },
      { test: /(\.css|\.scss)$/, loaders: ['style', 'css', 'sass?sourceMap'] },
    ],
  },
};

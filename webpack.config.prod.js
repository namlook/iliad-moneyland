import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false,
};

const PUBLIC_PATH = '/';

export default {
  debug: true,
  // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps
  // and https://webpack.github.io/docs/configuration.html#devtool
  devtool: 'source-map',
  noInfo: true, // set to false to see a list of every file being bundled.
  entry: './frontend/index',
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
     // Note: Physical files are only output by the production build task `npm run build`.
    path: `${__dirname}/dist`,
    publicPath: PUBLIC_PATH,
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      Promise: 'es6-promise',
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    // required to prevent multiple install of react
    fallback: [path.join(__dirname, 'node_modules')],
  },
  // // Same issue, for loaders like babel
  // resolveLoader: {
    // fallback: [path.join(__dirname, 'node_modules')],
  // },
  module: {
    loaders: [
      {
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
        ],

      },
      { test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)$/i, loaders: ['file'] },
      {
        test: /(\.css|\.scss)$/,
        include: [
          path.join(__dirname, 'frontend'),
          path.join(__dirname, 'node_modules/odyssee-client/styles/styles.scss'),
          // path.join(__dirname, 'node_modules/odyssee-client/lib/styles.scss'),
          path.join(__dirname, 'node_modules/semantic-ui-css/semantic.css'),
        ],
        loader: ExtractTextPlugin.extract(['css', 'sass']),
      },
    ],
  },
};

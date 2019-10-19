// This file configures the development web server
// which supports hot reloading and synchronized testing.

// Require Browsersync along with webpack and middleware for it
import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev';

const bundler = webpack(config);

// Run Browsersync and use middleware for Hot Module Replacement
browserSync({
  port: 8080,
  ui: {
    port: 8081
  },
  server: {
    baseDir: 'src',

    middleware: [
      historyApiFallback(
        {
          disableDotRule: true,
          htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
        }
      ),

      webpackDevMiddleware(bundler, {
        publicPath: config.output.publicPath,
        host: '0.0.0.0',
        noInfo: true,
        quiet: false,
        stats: {
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
        },

        // for patients settings see
        // https://webpack.js.org/guides/development/#using-webpack-dev-middleware
      }),
      webpackHotMiddleware(bundler)
    ]
  },
  files: [
    'src/*.html'
  ]
});

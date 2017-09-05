// require('./check-versions')()

const config = require('../config');
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
}

const opn = require('opn');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = process.env.NODE_ENV === 'production' ? require('./webpack.prod.conf') : require('./webpack.dev.conf');
const port = process.env.PORT || config.dev.port;
const autoOpenBrowser = !!config.dev.autoOpenBrowser;

// const proxyTable = config.dev.proxyTable;

const app = express();
const compiler = webpack(webpackConfig);
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

app.use(devMiddleware);

const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

const uri = `http://localhost:${port}`;

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('Starting Dev server...');

devMiddleware.waitUntilValid(() => {
  console.log(`Listening at ${uri}\n`);
  
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }

  _resolve();
})

const server = app.listen(port);

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close();
  }
}
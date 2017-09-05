const path = require('path');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

exports.assetsPath = (_path) => {
  const assetsSubDirectory =  isProduction ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
}


exports.cssLoaders = (options = {}) => {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: isProduction,
      sourceMap: options.sourceMap
    }
  };
  
  function generateLoaders (loader, loaderOptions) {
    let loaders = [cssLoader];
    
    if (loader) {
      loaders.push({
        loader: `${loader}-loader`,
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      });
    }
  
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders);
    }
  }
  
  return {
    css: generateLoaders(),
    sass: generateLoaders('sass', { indentedSyntzx: true }),
    scss: generateLoaders('sass')
  };
};

exports.styleLoaders = (options) => {
  let output = [];
  const loaders = exports.cssLoaders(options)
  
  for (let extension in loaders) {
    const loader = loaders[extension];
    output.push({
      test: new RegExp(`\\.${extension}$`),
      use: loader
    });
  }
  return output;
}
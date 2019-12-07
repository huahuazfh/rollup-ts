const path = require('path');
const serve = require('rollup-plugin-serve');
const configList = require('./rollup.config');
const livereload = require('rollup-plugin-livereload');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}
const PORT = 8888;

configList.map((config, index) => {

  config.output.sourcemap = true;

  if( index === 0 ) {
    config.plugins = [
      ...config.plugins,
      ...[
        serve({
          port: PORT,
          open: true,
          openPage: '',
          contentBase: [resolveFile('')]
        }),
        livereload({
          watch: resolveFile('lib')
        })
      ]
    ]
  }

  return config;
})


module.exports = configList;
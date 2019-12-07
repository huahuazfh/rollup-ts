const path = require('path');
const buble = require('rollup-plugin-buble'); 
const typescript = require('rollup-plugin-typescript');
const resolve = require('rollup-plugin-node-resolve');
const tslint = require('rollup-plugin-tslint');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}
const isProd = process.env.NODE_ENV === 'production';

module.exports = [
  {
    input: resolveFile('src/index.ts'),
    output: {
      file: resolveFile(`lib/${isProd ? 'index.min.js' : 'index.js'}`),
      format: 'umd',
      name: 'demo',
    }, 
    plugins: [
      tslint({
        configuration: resolveFile('/tslint.json'),
        throwOnError: true
      }),
      typescript(),
      buble(),
      resolve()
    ],
  },
]
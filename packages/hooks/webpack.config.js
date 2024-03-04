const merge = require('webpack-merge');
const common = require('../../webpack.common.js');
const path = require('path');

// merge相当于tsconfig的extends
module.exports = merge(common, {
  // 这个项目定制化的结果
  entry: './es/index.js',
  output: {
    filename: 'encodeHooks.js',
    library: 'encodeHooks',
    path: path.resolve(__dirname, './dist'),
  },
});

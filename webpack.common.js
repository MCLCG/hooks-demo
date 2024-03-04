module.exports = {
  output: {
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  // 指定为生产环境
  mode: 'production',
  resolve: {
    extensions: ['.json', '.js'], // 解析JS
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.jsx?$/,
  //       use: {
  //         loader: 'babel-loader',
  //       },
  //     }
  //   ],
  // },
  // 剔除React
  externals: [
    {
      react: 'React',
    },
  ],
};

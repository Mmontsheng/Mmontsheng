/* eslint-disable no-param-reassign */
module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Mmontsheng Maoto';
        return args;
      });
  },
  publicPath: '/',
};

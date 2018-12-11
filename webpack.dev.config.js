const config = require('./webpack.prod.config');

config.entry.unshift('react-hot-loader/patch');
config.devServer = {
  contentBase: './public',
  inline: true,
  port: 12321,
};
config.mode = 'development';

config.module.rules.forEach((e) => {
  if (e.test.exec('.css') || e.test.exec('.scss')) {
    e.use[0] = 'style-loader';
  }
  return 0;
});

module.exports = config;

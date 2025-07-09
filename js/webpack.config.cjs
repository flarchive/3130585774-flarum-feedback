const config = require('flarum-webpack-config')();

config.module.rules.push({
  test: /\.less$/,
  use: ['style-loader', 'css-loader', 'less-loader'],
});

module.exports = config;

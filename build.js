process.env.NODE_ENV = 'production';

const WebpackConfig = require('react-scripts/config/webpack.config.prod');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

WebpackConfig.plugins.push(
  new ReactLoadablePlugin({
    filename: './dist/react-loadable.json'
  })
);

require('react-scripts/scripts/build');

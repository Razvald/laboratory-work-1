const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
      minimizer: [
          `...`,
          new CssMinimizerPlugin()
      ],
  }
});
const merge = require('webpack-merge');
const common = require('./common.config');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        open: true,
    },
});

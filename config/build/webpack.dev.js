var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('../helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:3000/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'/*,
        TODO setup when REST service ready
        proxy: {
            '/api/**': {
                target: 'http://localhost:8080/your-rest-service',
                secure: false,
                changeOrigin: true
            }
        }*/
    }
});
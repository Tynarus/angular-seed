const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('../helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    },

    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
});
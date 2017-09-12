var webpack = require('webpack');
var helpers = require('../helpers');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: [ '.ts', '.js' ]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [ 'istanbul-instrumenter-loader', 'awesome-typescript-loader?configFileName=config/tsconfig.json', 'angular2-template-loader' ],
                exclude: /\.spec\.ts$/
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [ 'raw-loader', 'sass-loader' ]
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                use: 'raw-loader'
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('src'),
            {}
        )
    ]
};
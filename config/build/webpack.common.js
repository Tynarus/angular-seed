var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('../helpers');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: [
            '.js', '.ts'
        ]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [ 'awesome-typescript-loader?configFileName=config/tsconfig.json', 'angular2-template-loader' ]
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.pug$/,
                use: [ 'raw-loader', 'pug-html-loader' ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [ 'raw-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|otf|ttf|eot|ico)$/,
                use: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                use: [ 'raw-loader', 'css-loader' ]
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: [ 'app', 'vendor', 'polyfills' ]
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('src'), // location of your src
            {}
        )
    ]
};
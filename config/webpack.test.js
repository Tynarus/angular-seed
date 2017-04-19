var webpack = require("webpack");
var helpers = require("./helpers");

module.exports = {
    devtool: "inline-source-map",

    resolve: {
        extensions: [ ".ts", ".js" ]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [ "ts-loader?configFileName=config/tsconfig.json", "angular2-template-loader" ]
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.pug$/,
                use: [ "raw-loader", "pug-html-loader" ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [ "raw-loader", "sass-loader" ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: "null-loader"
            },
            {
                test: /\.css$/,
                exclude: helpers.root("src", "app"),
                use: "null-loader"
            },
            {
                test: /\.css$/,
                include: helpers.root("src", "app"),
                use: "raw-loader"
            }
        ]
    },

    plugins: [
        // Workaround for Angular-SystemJS-Webpack(2) WARNINGS
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('src'), // location of your src
            {
                // your Angular Async Route paths relative to this root directory
            }
        )
    ]
};
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var helpers = require("./helpers");

module.exports = {
    entry: {
        "polyfills": "./src/polyfills.ts",
        "vendor": "./src/vendor.ts",
        "app": "./src/main.ts"
    },

    resolve: {
        extensions: [
            ".js", ".ts"
        ]
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
                use: "pug-html-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [ "raw-loader", "sass-loader" ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|otf|ttf|eot|ico)$/,
                use: "file-loader?name=assets/[name].[hash].[ext]"
            },
            {
                test: /\.css$/,
                exclude: helpers.root("src", "app"),
                use: ExtractTextPlugin.extract({ fallbackLoader: "style-loader", loader: "css-loader?sourceMap" })
            },
            {
                test: /\.css$/,
                include: helpers.root("src", "app"),
                use: "raw-loader"
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: [ "app", "vendor", "polyfills" ]
        }),

        /*
         * Copy static assets to the build directory.
         */
        new CopyWebpackPlugin([
            {
                from: "src/assets",
                to: "assets"
            }
        ]),

        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),

        // Workaround for Angular-SystemJS-Webpack(2) WARNINGS
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root("src"),
            {}
        )
    ]
};
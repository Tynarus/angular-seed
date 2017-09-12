var webpackConfig = require('./webpack.test');

module.exports = function(config) {
    config.set({
        basePath: '',
        files: [
            {
                pattern: './karma-test-shim.js',
                watched: false
            }
        ],
        preprocessors: {
            './karma-test-shim.js': [
                'webpack', 'sourcemap'
            ]
        },
        frameworks: [ 'jasmine' ],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('karma-webpack'),
            require('karma-sourcemap-loader')
        ],
        client:{
            clearContext: false
        },
        webpack: webpackConfig,
        coverageIstanbulReporter: {
            reports: [ 'html', 'lcovonly' ],
            fixWebpackSourcePaths: true,
            remapOptions: {
                exclude: /\*.spec.ts/
            }
        },
        // TODO build flag/param to specify coverage mode
        reporters: [ 'progress', /*'kjhtml', */'coverage-istanbul' ],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: [ 'Chrome' ],
        // TODO coverage param applies to this, too!
        singleRun: true
    });
};
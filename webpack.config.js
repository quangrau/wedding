"use strict";
var path              = require('path');
var webpack           = require('webpack');
var loaders           = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack-dashboard
var Dashboard       = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard       = new Dashboard();

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "3000";

// global css
loaders.push({
    test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
    loaders: [
        'style?sourceMap',
        'css'
    ]
});
// local scss modules
loaders.push({
    test: /[\/\\]src[\/\\].*\.scss/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        'sass'
    ]
});

// local css modules
loaders.push({
    test: /[\/\\]src[\/\\].*\.css/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
    ]
});

module.exports = {
    entry: [
        `webpack-dev-server/client?http://${HOST}:${PORT}`,
        `webpack/hot/only-dev-server`,
        `./src/index.js` // Your appʼs entry point
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders
    },
    devServer: {
        contentBase: "./public",
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        quite: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new DashboardPlugin(dashboard.setData),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Thành Quang & Thiên Thanh | Our wedding | 2nd October',
            template: './src/template.html'
        }),
    ]
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs');

let webpackConfig = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        index: ['webpack-hot-middleware/client?quiet=true&reload=true', path.resolve(__dirname, 'src/index.js')]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `js/[name].[hash:8].js`,
        chunkFilename: `js/[name].[hash:8].chunk.js`,
        publicPath: '/'
    },
    resolve: {
        alias: {

        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                cacheDirectory: false
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            inject: true,
            title: 'index',
            filename: 'index.html',
            chunks: ['index', 'manifest'],
            chunksSortMode: 'none',
            favicon: path.resolve(__dirname, 'src/favicon.ico')
        })
    ]
}

webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = webpackConfig;
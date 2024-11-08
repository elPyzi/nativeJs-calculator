/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            context: 'src',
                            outputPath: '/',
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html',
            favicon: path.join(
                __dirname,
                'src',
                'assets',
                'images',
                'favicon.png',
            ),
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'pages', 'calculator.html'),
            filename: 'pages/calculator.html',
        }),
    ],
    devServer: {
        port: 9042,
        watchFiles: path.join(__dirname, 'src'),
        compress: true,
        hot: true,
        open: true,
    },
};

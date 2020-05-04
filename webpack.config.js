const { resolve } = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production'

const config = {
    entry: {
        main: resolve('./src/index.tsx'),
    },
    output: {
        path: resolve('./dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: ['awesome-typescript-loader?module=es6'],
                exclude: [/node_modules/, /server/],
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                enforce: 'pre',
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'src/styles/postcss.config.js',
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'src/styles/postcss.config.js',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: !isDevelopment },
                    },
                ],
            },
        ],
    },
    resolve: {
        modules: ['node_modules', resolve('./src')],
        extensions: ['.js', '.ts', '.tsx'],
    },
    devServer: {
        contentBase: resolve('./dist'),
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: { '^/api': '' },
            },
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
    ],
}

module.exports = config

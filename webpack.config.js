const { resolve } = require('path')

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
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
    ],
}

module.exports = config

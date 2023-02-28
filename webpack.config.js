const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || './';

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: { app: './src/ts/app.ts' },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader', options: { importLoaders: 1 } }
                ]
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            // make sure raw font files referenced from the fontawesome stylesheet are copied into dist
            // from https://chriscourses.com/blog/loading-fonts-webpack
            {
                test: /\.(jpe?g|svg|png|gif|ico|eot|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
                type: 'asset/resource',
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: ASSET_PATH
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    optimization: {
        minimize: true,
    }
};

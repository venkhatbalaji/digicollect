var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    cache: false,
    devServer: {
        compress: true,
        port: 9000,
        open: {
            app: {
                name: 'google-chrome',
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|gif|png|svg|ico)$/i,
                use: [
                    {
                        loader: 'url-loader',
                    }
                ]
            }
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
}
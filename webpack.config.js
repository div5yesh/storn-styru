let webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'styru.min.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
		port: process.env.PORT || 8080,
        publicPath: '/',
        contentBase: './dist'
    },

    devtool: "#source-map",

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: "style-loader!css-loader"
        }]
	},
	
	resolve: {
		modules: [path.resolve(__dirname, "src"), "node_modules"]
	}
};
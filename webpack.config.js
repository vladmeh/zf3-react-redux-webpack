const webpack = require('webpack');
const path = require('path');
const ENVIRONMENT = process.env.NODE_ENV || 'development';

let config = {
	context: path.resolve(__dirname, 'app'),
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, "public/js")
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
			},

			{
				test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
				loader: 'url-loader'
			},

			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "resolve-url-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(ENVIRONMENT)
		})
	],
	node: {
		process: false
	}
};

if (ENVIRONMENT == 'production') {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				drop_console: false,
				warnings: false
			}
		})
	);
}

module.exports = config;
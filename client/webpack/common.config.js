/* eslint-disable no-dupe-keys */
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./client/src/index.js",

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						cacheDirectory: true
					}
				}
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				loader: "file-loader"
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	output: {
		publicPath: "/",
		filename: "bundle.js",
		// eslint-disable-next-line no-undef
		path: path.resolve(__dirname, "dist"),
		publicPath: process.env.PUBLIC_URL || "/",
	},
	plugins: [
		new HtmlWebpackPlugin({
			favicon: "./client/src/favicon.ico",
			template: "./client/src/index.html"
		})
	],
	resolve: {
		enforceExtension: false
	}
};

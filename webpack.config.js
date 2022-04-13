const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/dist/",
		filename: "bundle.js",
		clean: true,
	},

	mode: "development",

	devtool: "inline-source-map",

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: { presets: ["@babel/env"] },
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},

	resolve: { extensions: ["*", ".js", ".jsx"] },

	devServer: {
		static: { directory: "./dist" },
		port: 3000,
		hot: true,
		open: true,
	},
	
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			inject: "body",
			filename: "index.html",
		}),
	],
};

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 抽离css，故style-loader无效
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.[contenthash].js",
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
				options: {
					presets: ["@babel/env"],
					plugins: ["react-refresh/babel"],
				},
			},
			{
				// 什么文件被转换
				test: /\.less$/,
				loader: MiniCssExtractPlugin.loader,
				enforce: "post",
			},
			{
				// 什么文件被转换
				test: /\.less$/,
				loader: "css-loader",
				options: {
					modules: true,
				},
			},
			{
				test: /\.less$/,
				loader: "less-loader",
				enforce: "pre",
			},
		],
	},

	resolve: { extensions: ["*", ".js", ".jsx"] },

	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
			watch: true,
		},
		hot: true,
		open: true,
		liveReload: true,
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			inject: "body",
			filename: "index.html",
		}),
		new MiniCssExtractPlugin(),
		new ReactRefreshPlugin(),
	],
};

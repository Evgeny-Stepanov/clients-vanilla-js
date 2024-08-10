const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("./webpack.paths");
const config = require("./webpack.config");

module.exports =
	(config,
	{
		mode: "development",
		output: {
			path: paths.build,
			filename: "[name].bundle.js",
		},

		plugins: [
			new HtmlWebpackPlugin({
				template: paths.src + "/auth/index.html",
				filename: "index.html",
			}),
			new HtmlWebpackPlugin({
				template: paths.src + "/app/app.html",
				filename: "app.html",
			}),
		],

		module: {
			rules: [
				{
					test: /\.s[ac]ss$/i,
					use: ["style-loader", "css-loader", "sass-loader"],
				},
				{
					test: /\.(png|svg|jpg|jpeg|gif)$/i,
					type: "asset/resource",
					generator: {
						filename: "images/[hash][ext][query]",
					},
				},
			],
		},

		devServer: {
			historyApiFallback: true,
			open: true,
			compress: true,
			hot: true,
			port: 3000,
		},
	});

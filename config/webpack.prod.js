const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const paths = require("./webpack.paths");
const config = require("./webpack.config");

module.exports =
	(config,
	{
		mode: "production",
		output: {
			path: paths.build,
			filename: "[name].[contenthash].bundle.js",
		},

		plugins: [
			new CleanWebpackPlugin(),

			new CopyWebpackPlugin({
				patterns: [
					{
						from: paths.src + "/images/favicon",
						to: paths.build + "/images/favicon",
						globOptions: {
							ignore: ["*.DS_Store"],
						},
						noErrorOnMissing: true,
					},
				],
			}),

			new HtmlWebpackPlugin({
				template: paths.src + "/auth/index.html",
				filename: "index.html",
			}),
			new HtmlWebpackPlugin({
				template: paths.src + "/app/app.html",
				filename: "app.html",
			}),

			new MiniCssExtractPlugin({
				filename: "css/[name].[contenthash].css",
			}),
		],

		module: {
			rules: [
				{
					test: /\.(sass|scss|css)$/,
					use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
				},
				{
					test: /\.(jpe?g|png|gif|svg)$/i,
					type: "asset/resource",
					generator: {
						filename: "images/[name][ext][query]",
					},
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: "asset/resource",
					generator: {
						filename: "fonts/[name][ext][query]",
					},
				},
			],
		},

		optimization: {
			minimize: true,
			minimizer: [
				"...",
				new CssMinimizerPlugin(),
				new ImageMinimizerPlugin({
					minimizer: {
						implementation: ImageMinimizerPlugin.imageminMinify,
						options: {
							plugins: [
								["gifsicle", { interlaced: true }],
								["jpegtran", { progressive: true }],
								["optipng", { optimizationLevel: 5 }],
								[
									"svgo",
									{
										plugins: [
											{
												name: "preset-default",
												params: {
													overrides: {
														removeViewBox: false,
														addAttributesToSVGElement: {
															params: {
																attributes: [
																	{ xmlns: "http://www.w3.org/2000/svg" },
																],
															},
														},
													},
												},
											},
										],
									},
								],
							],
						},
					},
				}),
			],
		},
	});

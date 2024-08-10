const paths = require("./webpack.paths");

module.exports = {
	entry: {
		auth: [paths.src + "/auth/index.js"],
		app: [paths.src + "/app/app.js"],
	},
	module: {
		rules: [
			{
				test: /\.(?:js)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env", { targets: "defaults" }]],
					},
				},
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
		],
	},
};

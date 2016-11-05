var webpack = require("webpack");
module.exports = {
	entry: ["./entry.js"],
	output: {
		path: "./app",
		filename: "bundle.js"
	},
	plugins: [
		new webpack.ProvidePlugin({
			riot: 'riot'
		})
	],

	module: {
		    preLoaders: [
			          { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' } }
			        ],
		loaders: [
			{ 
				test: /\.js$|\.tag$/, exclude: /node_modules/, 
				loader: 'babel-loader' 
			}
			,
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.html$/,
				loader: "raw-loader"
			},
			{
				test: /\.png$/,
				loader: "url-loader?limit=100000"
			},
			{
				test: /\.jpg$/,
				loader: "file-loader"
			},
			{
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/octet-stream'
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file'
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=image/svg+xml'
			},
			{
				test: /jquery/, loader: 'expose?$!expose?jQuery'
			}
		]
	}
};

module.exports = {
    entry: "./entry.js",
    output: {
        path: "./app",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            }
        ]
    }
};
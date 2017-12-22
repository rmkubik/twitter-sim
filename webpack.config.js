module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    target: "node",
    devServer: {
        contentBase: ".",
        compress: true,
        port: 9000
    }
};
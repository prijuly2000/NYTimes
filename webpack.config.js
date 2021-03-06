const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "src/index.html"),
    filename: "./index.html"
});
module.exports = {
    entry: path.join(__dirname, "src/index.js"),
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: "file-loader",
                  }
                ]
              },
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devtool: "inline-source-map",
    devServer: {
        port: 3001
    }
};

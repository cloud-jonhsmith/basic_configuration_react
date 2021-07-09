const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const rootPath = path.join(__dirname, "../../base_react_typescript");

module.exports = {
  entry: {
    app: path.join(rootPath, "src/index.tsx"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
      {
        test: /\.(jpg|png|jpeg|svg|gif|woff2|woff|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name].[contenthash].[ext]",
              outputPath: "img/",
              useRelativePath: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Project name",
      description: "Write some description...",
      filename: path.join(rootPath, "docs/index.html"),
      template: path.join(rootPath, "public/index.html"),
    }),
    /* new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }), */
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      //chunks: "all",
    },
  },
};

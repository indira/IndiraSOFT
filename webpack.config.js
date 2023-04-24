const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const postCSSPlugins = [require("postcss-import"), require("postcss-mixins"), require("postcss-simple-vars"), require("postcss-nested"), require("postcss-hexrgba"), require("autoprefixer")]

module.exports = {
  entry: "./app/Main.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "app"),
    filename: "bundled.js"
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "app")
    },
    liveReload: false,
    hot: true,
    //Setting the server side routing for the actual path to work
    historyApiFallback: { index: "index.html" }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", { loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
          }
        }
      }
    ]
  }
}

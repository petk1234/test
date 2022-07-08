const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: "./dist",
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      //   {
      //     test: /\.hbs$/i,
      //     loader: "html-loader", возвращает хтмл-код, а не функцию которая преобразовует в шаблон
      //   },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader", // возвращает функцию-шаблон
      },
      //   },
    ],
    // plugins: [
    //   new webpack.LoaderOptionsPlugin({
    //     options: {
    //       handlebarsLoader: {},
    //     },
    //   }),
    // ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/index.html",
      filename: "index.html",
    }),
    // new HtmlWebpackPlugin({
    //   template: "./src/template.hbs",
    //   filename: "index.html",
    // }),
  ],
};

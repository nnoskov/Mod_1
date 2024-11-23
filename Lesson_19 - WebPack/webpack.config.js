const path = require("path");

// html-webpack-plugin Упрощает осздание файлов HTML и может автоматически вставлять
// модули JS в наш основной шаблон HTML
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Бывает удобнее иметь отдельные CSS-файлы со стилями в сборке.
// Для этого установим другой пакет — MiniCssExtractPlugin:
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 5505,
    //open: true, // Открытие по умолчанию в браузере
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: [["@babel/preset-env"]],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

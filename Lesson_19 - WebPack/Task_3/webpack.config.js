const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "index.js"),
    output: {
      filename: "app.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
}
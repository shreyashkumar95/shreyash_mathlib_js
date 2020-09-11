const path = require("path");

module.exports = {
  entry: "./lib/math.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: "mathlib",
    libraryTarget: "umd",
    libraryExport: "default",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
    ],
  },
};

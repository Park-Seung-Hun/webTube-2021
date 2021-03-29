// 100% client code
const path = require("path");
// import path from "path"와 같다.

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module:{
      rules:[
          {
            test: /\.(scss)$/,
            use: [
            {
                loader: MiniCssExtractPlugin.loader
            },            
          }
      ]
  },
  output: { path: OUTPUT_DIR, filename: "[name].[format]" },
};

module.exports = config;

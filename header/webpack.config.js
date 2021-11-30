const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const preprocess = require("svelte-preprocess");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const mode = process.env.NODE_ENV || "development";
const port = process.env.PORT ? process.env.PORT : 3001;
const prod = mode === "production";

module.exports = {
  entry: {
    bundle: ["./src/main.ts"],
  },
  resolve: {
    alias: {
      svelte: path.dirname(require.resolve("svelte/package.json")),
    },
    extensions: [".mjs", ".js", ".svelte", ".ts"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
    publicPath: `http://localhost:${port}/`,
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            compilerOptions: {
              dev: !prod,
            },
            emitCss: prod,
            hotReload: !prod,
            preprocess: preprocess({
              postcss: false,
              typescript: true,
            }),
          },
        },
      },
      {
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|scss)$/i,
        exclude: (modulePath) => /ckeditor5-/.test(modulePath),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/i,
        enforce: "pre",
        use: [
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port,
  },
  mode,
  plugins: [
    new ModuleFederationPlugin({
      name: "CTA",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./CTA": "./src/CTA.svelte",
        "./Header": "./src/Header.svelte",
      },
      shared: require("./package.json").dependencies,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
  devtool: prod ? false : "source-map",
};

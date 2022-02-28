const { appendFile } = require("fs");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/App.js",
  output: {
    filename: "App[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css/, // All css files
        use: [MiniCssExtractPlugin.loader, "css-loader"], // Webpack reads from right to left, "style-loader" - for bundling css with js
      },
      {
        test: /\.hbs$/,
        use: "handlebars-loader",
      },
      {
        test: /\.js$/, // All js files
        exclude: /node_modules/, // Except
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"], // can add as many plugins as needed for babel
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "App[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      //     inject: false,
      //     templateContent: ({ htmlWebpackPlugin }) => `
      //   <html>
      //     <head>
      //     <meta charset="UTF-8" />
      //     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      //     <link rel="preconnect" href="https://fonts.googleapis.com" />
      //     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      //     <link
      //       href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@200;400;600&display=swap"
      //       rel="stylesheet"
      //     />
      //     <link
      //       rel="stylesheet"
      //       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      //       integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
      //       crossorigin="anonymous"
      //       referrerpolicy="no-referrer"
      //     />
      //       ${htmlWebpackPlugin.tags.headTags}
      //     </head>
      //     <body>
      //     <header class="header">
      //     <h1 class="title">Martun's Todo List</h1>
      //   </header>
      //   <form>
      //     <input type="text" class="todo-input" />
      //     <button class="todo-btn" type="submit">
      //       <i class="fas fa-plus-square"></i>
      //     </button>
      //     <div class="select">
      //       <select name="todos" class="filter-todo">
      //         <option value="all">All</option>
      //         <option value="completed">Completed</option>
      //         <option value="uncompleted">Uncompleted</option>
      //       </select>
      //     </div>
      //   </form>
      //   <div class="todo-container">
      //     <ul class="todo-list"></ul>
      //   </div>
      //     </body>
      //   </html>
      // `,
      template: "src/App.hbs",

      title: "Martun's Todo",
      filename: "../index.html",
    }),
  ], // Plugins
};

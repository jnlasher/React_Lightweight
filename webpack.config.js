const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js", // Starting entry for our application
  mode: "development",     // Property to identify dev from prod modes
  module: {                // Defines how exported JS modules are tranformed
    rules: [               // Rules for which files are included in the tranformation
      {
        test: /\.(js|jsx)$/,                        // Only match JS and JSX files
        exclude: /(node_modules|bower_components)/, // Directories not to match in
        loader: "babel-loader",                     // Since we're using babel, it's our loader
        options: { presets: ["@babel/env"] }        // Use babel/env for JS and JSX
      },
      {
        test: /\.css$/,                             // Rule for CSS files
        use: ["style-loader", "css-loader"]         // Use these loaders for CSS files
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },   // Which Extensions to resolve via Webpack
  output: {                                        // Where bundled code should go
    path: path.resolve(__dirname, "dist/"),        // Path to our distribution folder
    publicPath: "/dist/",                          // What directory the bundle should go in and where to serve from
    filename: "bundle.js"                          // The bundled file name
  },
  devServer: {                                     // The webpack-dev-server configuration
    contentBase: path.join(__dirname, "public/"),  // Base path for these things
    port: 3000,                                    // Base port to serve from
    publicPath: "http://localhost:3000/dist/",     // Where the bundled code lives
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()] // Start hot module replacement (to prevent having to reload after each change)
};
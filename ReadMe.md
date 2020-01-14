Does `create-react-app` ever feel bloated or unnecessary? While it's nice to have a simple tool that abstracts away all the setup of the source files, sometimes it's nice to have a clean, minimal-as-possible outline for building a project. 

I decided to dig into the application itself and start with as few dependencies and modules as possible. The steps to build this are documented below.

1. Start a new NPM project
    * Run `npm init`
    * Fill out the application information if you like, but defaults are okay
    * This creates the package.json file
2. Create an entry point
    * The index.html file should live here and provides an entry point for your app
3. Install Babel to get polyfills and JSX compiling working
    * Run `npm install --save-dev @babel/core@latest @babel/cli@latest @babel/preset-env@latest @babel/preset-react@latest`
    * `babel/core` is the main Babel package
    * `babel/cli` lets you compile files from the command line
    * `babel/preset-env` transforms ES6+ into "traditional" JavaScript
    * `babel/preset-react` transforms JSX into "traditional" JavaScript
4. Create .babelrc into root
    * Just tell it the presets to use (see file for details)
5. Install and configure Webpack
    * Run `npm install --save-dev webpack@latest webpack-cli@latest webpack-dev-server@latest style-loader@latest css-loader@latest babel-loader@latest`
    * Create webpack.config.js in root (see file comments)
6. Set up React
    * Install the React packages: `npm install react@latest react-dom@latest`
    * Create a "src", "src/App", and "src/static" directories
    * Create src/index.js (see file comments)
    * Create App/App.js (see file comments)
    * Create static/App.css
    * To actually run it, add a script "start" to package.json that runs `webpack-dev-server --mode development`
7. Finish up the Hot Module Rendering (optional)
    * Install the package for it: `npm install react-hot-loader@latest` (doesn't have to be a dev dependency since it's smart enough to know not to use itself in production)
    * Add this to App.js and use it
8. Building to dist (optional)
    * Files are actually served from memory when the server is running (not /dist). To really do that, you have to utilize the build option:
    * Add a script to package.json called "build" with the command `webpack --mode development`
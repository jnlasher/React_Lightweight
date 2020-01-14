// Import React stuff
import React, { Component } from "react";
// Import hot module rendering stuff
import { hot } from "react-hot-loader";
// Import our CSS stuff
import "./App.css";

class App extends Component{
  render() {
    return(
      <div className="App">
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default hot(module)(App); // instead of `export default App`;
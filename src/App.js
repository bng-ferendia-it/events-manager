import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Layouts from "./components/Layouts";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layouts />
      </BrowserRouter>
    );
  }
}
export default App;

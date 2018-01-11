import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import About from "./components/About/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar />            
            <div>
              <Route exact path="/" component={Landing} />
              <Route exact path="/home" component={Home} />
              <Route path="/about" component={About} />
            </div>            
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

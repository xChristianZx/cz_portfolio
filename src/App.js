import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
// import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="router-wrapper">
          <NavBar />
          <div className="content-container">
            {/* <Route exact path="/" component={Landing} /> */}
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

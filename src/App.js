import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
// import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

const NoMatch = () => {
  return (
    <div>
      <h1>Sorry, this page doesn't exist</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="router-wrapper">
          <NavBar />
          <div className="content-container">
            <Switch>
              {/* <Route exact path="/" component={Landing} /> */}
              <Route exact path="/" component={Home} />
              <Route path="/portfolio" component={Portfolio} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

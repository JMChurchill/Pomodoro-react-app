// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
// import components
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Router exact path="/about">
            <About />
          </Router>
          <Router exact path="*">
            <Error />
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

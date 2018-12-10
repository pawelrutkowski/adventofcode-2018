import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Day01 from "./Day01";
import Day02 from "./Day02";

const Home = () => <div>Select day and check/run my solutions</div>;

const MainMenu = () => {
  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/01"}>
        <button>Day 01</button>
      </Link>
      <Link to={"/02"}>
        <button>Day 02</button>
      </Link>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <header>
            <h1>Welcome to Advent of code 2018</h1>
            <h2>solutions by pawelrutkowski</h2>
            <MainMenu />
          </header>
          <div>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/01"} component={Day01} />
            <Route exact path={"/02"} component={Day02} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

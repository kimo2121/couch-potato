import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import FreeChipz from "./components/FreeChipz/FreeChipz";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/free-chipz" component={FreeChipz} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

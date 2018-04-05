import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import './App.css';


const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={ Portfolio } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/work" component={ Work } />
        <Route component={ NoMatch } />
      </Switch>
      <Footer />
    </div>
  </Router>;

export default App;

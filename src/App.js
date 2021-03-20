import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

const App = () => (
  <Router>
    <Wrapper>
      <NavTabs/>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Footer/>
    </Wrapper>
  </Router>
);

export default App;

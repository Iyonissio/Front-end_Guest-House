import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Relatorios from "./components/pages/Relatorios";
import Admin from "./components/pages/Admin";
import Login from "./components/pages/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/relatorios" component={Relatorios} />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
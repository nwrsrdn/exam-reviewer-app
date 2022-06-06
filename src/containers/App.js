import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Dashboard from "./Dashboard/Dashboard";

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Dashboard />
        <Footer />
      </div>
    );
  }
}

export default App
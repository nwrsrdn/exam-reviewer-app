import React, { Component } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
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
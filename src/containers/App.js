import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Dashboard from "./Dashboard/Dashboard";

class App extends Component {

  render () {
    return (
      <>
        <Navbar />
          <Routes>
            <Route path='/' element={ <Dashboard /> }/>
            {/* <Route path='/exam' element={ <ExamPage /> }/>
            <Route path='/stats' element={ <Stats /> }/>
            <Route path='/logout' element={ <Logout /> }/> */}
          </Routes>
        <Footer />
      </>
    );
  }
}

export default App
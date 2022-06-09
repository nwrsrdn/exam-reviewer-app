import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() { 
    return (
      <>
        <nav className="flex justify-between bb b--black-10">
          <Link className="link black-70 hover-white no-underline flex items-center pa3" to="/">
            Exam Reviewer
          </Link>
          <div className="flex-grow pa3 flex items-center">
            <Link className="f6 link dib black dim mr3 mr4-ns" to="/about">My Stats</Link>
            <Link className="f6 link dib black dim mr3 mr4-ns" to="/login">Sign In</Link>
            <Link className="f6 dib black bg-animate hover-bg-white hover-white no-underline pv2 ph4 br-pill ba b--black-20" to="/register">Sign Up</Link>
          </div>
        </nav>
      </>
    );
  }
}
 
export default Navbar;
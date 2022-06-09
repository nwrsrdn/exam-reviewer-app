import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {  } 
  render() { 
    return (
      <footer className="bg-near-black white-80 pv5 pv6-l ph4 bottom-0-l">
        <p className="f6"><span className="dib mr4 mr5-ns">©2022 Exam Reviewer App</span>
          <Link className="link white-80 hover-light-purple" to="/terms"> Terms </Link> /
          <Link className="link white-80 hover-gold" to="/privacy"> Privacy </Link> /
          <Link className="link white-80 hover-green" to="#"> erwin@nwrsrdn.eaa </Link>
        </p>
      </footer>
    );
  }
}
 
export default Footer;
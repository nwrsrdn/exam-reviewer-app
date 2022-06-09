import React, { Component } from 'react'

class Navbar extends Component {
  render() { 
    return (
      <nav className='nav'>
        <a href="/" className='site-title'>Exam Reviewer</a>
        <ul>
          <li>
            <a href="/stats">My Stats</a>
          </li>
          <li>
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    );
  }
}
 
export default Navbar;
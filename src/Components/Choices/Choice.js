import React, { Component } from 'react'

class Choice extends Component {
  state = {  } 
  render() { 
    return (
      <div>
        <input type="radio" onClick={ this.props.getAnswer }/>
        <p>{ this.props.choice }</p>
      </div>
    );
  }
}
 
export default Choice;
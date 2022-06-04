import React, { Component } from 'react'
import Choice from './Choice';

class Choices extends Component {
  state = {  } 
  render() { 
    const { choices, correctAnswer } = this.props

    choices.map((choice) => {
      return (
        <Choice choice={ choice } getAnswer={ this.props.getAnswer }/>
      )
    })

    return (
      <div>
        { choices }
      </div>
    );
  }
}
 
export default Choices
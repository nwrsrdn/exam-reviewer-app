import React, { Component } from 'react'
import Choice from './Choice';

class Choices extends Component {
  state = {  } 
  render() { 
    const { choices } = this.props

    const choice = choices.map((choice, index) => {
      return <Choice key={ index }  choice={ choice }/>
    })

    return (
      <div className='pa3 mw-100'>
        { choice }
      </div>
    );
  }
}
 
export default Choices
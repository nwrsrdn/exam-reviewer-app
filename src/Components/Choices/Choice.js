import React, { Component } from 'react'

class Choice extends Component {
  render() {
    const { choiceId, choice, getAnswer } = this.props
    return (
      <>
        <button
          className="f6 link dim br2 ph3 pv2 mb2 dib white bg-light-purple w-100"
          // href='#0'
          onClick={ getAnswer }
          choiceid={ choiceId }
          value={ choice }
        >
          { choice }
        </button>
      </>
    );
  }
}
 
export default Choice;
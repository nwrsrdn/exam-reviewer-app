import React, { Component } from 'react'

class AnswerBtn extends Component {
  state = {  } 
  render() { 
    const { nextQuestion } = this.props
    return (
      <>
        <button type="button" onClick={ nextQuestion } value="NEXT_QUESTION">Answer</button>
      </>
    );
  }
}
 
export default AnswerBtn;
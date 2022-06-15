import React, { Component } from 'react'

class AnswerBtn extends Component {
  state = {  } 
  render() { 
    const { nextQuestion } = this.props
    return (
      <>
        <input type="button" onClick={ nextQuestion } value="NEXT_QUESTION" />
      </>
    );
  }
}
 
export default AnswerBtn;
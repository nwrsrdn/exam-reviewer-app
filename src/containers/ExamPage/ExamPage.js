import React, { Component } from 'react'
import { connect } from "react-redux";

import Question from '../../components/Question/Question';
import Choices from "../../components/Choices/Choices";
import AnswerBtn from '../../components/ExamButtons/AnswerBtn';
import SkipBtn from '../../components/ExamButtons/SkipBtn';

import {
  setCurrentAnswer,
  setQuestion
} from "../../actions";

const mapStateToProps = state => {
  return {
    currentAnswer: state.getCurrentAnswer.currentAnswer,
    currentQuestion: state.getQuestion.currentQuestion,
    // remainingQuestions: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
    // previousAnswers: [],
    // correctAnswers: []
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCurrentAnswer: event => dispatch(setCurrentAnswer(event.target.value)),
    skipQuestion: () => { dispatch(setQuestion()) }
    // setRemainingQuestions: () => dispatch(setRemainingQuestions()),
    // onSubmitAnswer: event => dispatch(setPreviousAnswers()),
  }
}

class ExamPage extends Component {
  render() {
    const {
      reviewer,
      getCurrentAnswer,
      skipQuestion,
      currentQuestion
    } = this.props
    
    return (
      <>
        <Question question={ reviewer[currentQuestion].question }/>
        <Choices choices={ reviewer[currentQuestion].choices } getAnswer={ getCurrentAnswer }/>
        <div>
          <AnswerBtn submitAnswer={ getCurrentAnswer }/>
          <SkipBtn skipQuestion={ skipQuestion }/>
        </div>
      </>
    );
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ExamPage);
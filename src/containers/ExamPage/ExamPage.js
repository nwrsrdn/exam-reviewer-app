import React, { Component } from 'react'

import Question from '../../components/Question/Question';
import Choices from "../../components/Choices/Choices";
// import AnswerBtn from '../../components/ExamButtons/AnswerBtn';

class ExamPage extends Component {
  render() {
    const currentQuestion = this.parseQuestionsList()
    const choices = []
    
    return (
      <>
        <Question question={ currentQuestion }/>
        <Choices choices={ choices }/>
      </>
    );
  }

  parseQuestionsList () {
    const { reviewer } = this.props
    const questions = reviewer.results

    return questions.map(({ question, correct_answer, incorrect_answers }, index) => {
      return {
        question,
        correctAnswer: correct_answer,
        questionNo: index+1,
        choices: [...incorrect_answers, correct_answer],
      }
    })
  }
}
 
export default ExamPage;
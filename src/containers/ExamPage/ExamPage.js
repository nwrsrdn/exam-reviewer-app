import React, { Component } from 'react'
// import AnswerBtn from '../../components/ExamButtons/AnswerBtn';
import Question from '../../components/Question/Question';

class ExamPage extends Component {
  constructor () {
    super()
    this.state = {
      reviewer: {},
      questionsList: [
        {
          questionNo: 0,
          question: '',
          choices: [],
          correctAnswer: '',
          tips: ''
        }
      ],
      answers: [
        {
          questionNo: 0,
          myAnswer: '',
          isCorrect: false
        }
      ],
      score: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      reviewer: props.reviewer
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.reviewer !== this.state.reviewer) {
      this.parseQuestionsList()
    }
  }

  render() {
    return (
      <div>
        <h4>{ this.state.reviewer.reviewer_name }</h4>
        <Question questions={ this.state.questionsList }/>
      </div>
    );
  }

  parseQuestionsList () {
    const { questions } = this.state.reviewer

    const questionsList = questions.map(({ question, answer, other_choices, tips }, index) => {
      return {
        question,
        tips,
        correctAnswer: answer,
        questionNo: index,
        choices: [...other_choices, answer],
      }
    })

    this.setState({
      questionsList: questionsList
    })
  }
}
 
export default ExamPage;
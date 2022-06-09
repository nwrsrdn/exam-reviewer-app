import React, { Component } from 'react'
import Choices from '../Choices/Choices';

class Question extends Component {
  constructor (props) {
    super(props)
    this.state = {
      proceedToNext: false,
      remainingQuestions: [],
      currentQuestion: {
        questionNo: 0,
        question: '',
        choices: [],
        correctAnswer: '',
        tips: ''
      },
      myAnswer: [
        {
          questionNo: 0,
          myAnswer: '',
          isCorrect: false
        }
      ],
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      remainingQuestions: props.questions
    };
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.remainingQuestions !== this.state.remainingQuestions) {
      this.randomizeQuestions()
      this.setState({
        currentQuestion: this.state.remainingQuestions.pop()
      })
    }
  }

  render() { 
    const { currentQuestion } = this.state
    return (
      <div className='w-75 bg-pink ma3 pa2 ph4 br2'>
        <h3>{ currentQuestion.question }</h3>
        <Choices choices={ currentQuestion.choices } getAnswer={ this.props.getAnswer }/>
      </div>
    );
  }

  randomizeQuestions () {
    const questions = this.state.remainingQuestions

    questions.sort((a, b) => Math.random() - 0.5)
    questions.map((question) => {
      return {
        ...question,
        choices: question.choices.sort((a, b) => Math.random() - 0.5)
      }
    })

    this.setState({
      remainingQuestions: questions
    })
  }
}
 
export default Question;
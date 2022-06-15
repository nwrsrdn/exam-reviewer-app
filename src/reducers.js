import {
  REQUEST_REVIEWER_PENDING,
  REQUEST_REVIEWER_SUCCESS,
  REQUEST_REVIEWER_FAILED,
  GET_ANSWER,
  SKIP_QUESTION
} from "./constants";

const initialStateReviewer = {
  isPending: false,
  reviewer: {},
  error: ''
}

export const requestReviewer = (state = initialStateReviewer, action = {}) => {
  switch (action.type) {
    case REQUEST_REVIEWER_PENDING:
      return {
        ...state,
        isPending: true
      }
    
    case REQUEST_REVIEWER_SUCCESS:
      return {
        ...state,
        reviewer: action.payload,
        isPending: false
      }
    
    case REQUEST_REVIEWER_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      }
  
    default:
      return state
  }
}

const initialStateCurrentAnswer = {
  currentAnswer: 0,
  previousAnswers: [],
  correctAnswers: []
}

export const getCurrentAnswer = (state = initialStateCurrentAnswer, action = {}) => {
  switch (action.type) {
    case GET_ANSWER:
      console.log('getCurrentAnswer:', action.payload)
      return {
        ...state,
        currentAnswer: action.payload
      }
  
    default:
      return state
  }
}

const initialStateQuestions = {
  currentQuestion: 0,
  remainingQuestions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

export const getQuestion = (state = initialStateQuestions, action = {}) => {
  switch (action.type) {
    case SKIP_QUESTION:
      const { currentQuestion, remainingQuestions } = state
      const questionList = remainingQuestions
      const questionNo = (questionList.length !== 0 && currentQuestion < questionList.length-1) ? currentQuestion+1 : 0

      return {
        ...state,
        currentQuestion: questionNo
      }
  
    default:
      return state
  }
}
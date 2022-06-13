import {
  REQUEST_REVIEWER_PENDING,
  REQUEST_REVIEWER_SUCCESS,
  REQUEST_REVIEWER_FAILED,
  PREV_QUESTION,
  NEXT_QUESTION,
  SKIP_QUESTION,
} from "./constants";

const initialStateQuestionaire = {
  isPending: false,
  reviewer: {},
  error: ''
}

export const requestReviewer = (state = initialStateQuestionaire, action = {}) => {
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

const initialStateCurrentQuestion = {}

export const getCurrentQuestion = (state = initialStateCurrentQuestion, action = {}) => {
  switch (action.type) {
    case PREV_QUESTION:
      return {}
    case NEXT_QUESTION:
      return {}
    case SKIP_QUESTION:
      return {}
  
    default:
      break;
  }
}

const initialStateCurrentAnswer = {}

export const getCurrentAnswer = (state = initialStateCurrentAnswer, action = {}) => {
  //
}
import {
  REQUEST_REVIEWER_PENDING,
  REQUEST_REVIEWER_SUCCESS,
  REQUEST_REVIEWER_FAILED
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
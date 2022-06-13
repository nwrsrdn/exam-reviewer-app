import {
  REQUEST_REVIEWER_PENDING,
  REQUEST_REVIEWER_SUCCESS,
  REQUEST_REVIEWER_FAILED,
  PREV_QUESTION,
  NEXT_QUESTION,
  SKIP_QUESTION,
} from "./constants";

export const requestReviewer = () => (dispatch) => {
  dispatch({ type: REQUEST_REVIEWER_PENDING })

  const url = 'https://opentdb.com/api.php?amount=10&category=18&type=multiple'

  fetch(url)
      .then((response) => response.json())
      .then((reviewer) => dispatch({
        type: REQUEST_REVIEWER_SUCCESS,
        payload: reviewer
      }))
      .catch(error => dispatch({
        type: REQUEST_REVIEWER_FAILED,
        payload: error
      }))
}

export const getCurrentQuestion = dispatch => {
  //
}
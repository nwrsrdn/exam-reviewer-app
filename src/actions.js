import {
  REQUEST_REVIEWER_PENDING,
  REQUEST_REVIEWER_SUCCESS,
  REQUEST_REVIEWER_FAILED
} from "./constants";

export const requestReviewer = () => (dispatch) => {
  dispatch({ type: REQUEST_REVIEWER_PENDING })
  fetch('/reviewers/aws-developer-reviewer.json')
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
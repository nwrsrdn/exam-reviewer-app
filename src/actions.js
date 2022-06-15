import {
  REQUEST_REVIEWER_PENDING,
  REQUEST_REVIEWER_SUCCESS,
  REQUEST_REVIEWER_FAILED,
  GET_ANSWER,
  SKIP_QUESTION
} from "./constants";

export const requestReviewer = () => (dispatch) => {
  dispatch({ type: REQUEST_REVIEWER_PENDING })

  const url = 'https://opentdb.com/api.php?amount=10&category=18&type=multiple'

  fetch(url)
      .then((response) => response.json())
      .then((reviewer) => dispatch({
        type: REQUEST_REVIEWER_SUCCESS,
        payload: reviewer.results.sort((a, b) => Math.random() - 0.5).map(({ question, correct_answer, incorrect_answers }, index) => {
          return {
            no: index+1,
            question,
            correctAnswer: correct_answer,
            choices: [...incorrect_answers, correct_answer].sort((a, b) => Math.random() - 0.5),
          }
        })
      }))
      .catch(error => dispatch({
        type: REQUEST_REVIEWER_FAILED,
        payload: error
      }))
}

export const setCurrentAnswer = answer => ({
  type: GET_ANSWER,
  payload: answer
})

export const setQuestion = () => ({
  type: SKIP_QUESTION,
})
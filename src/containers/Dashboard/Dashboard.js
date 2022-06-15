import React, { Component } from 'react'
import { connect } from "react-redux";

import ExamPage from '../ExamPage/ExamPage';

import { requestReviewer } from "../../actions";

const mapStateToProps = state => {
  return {
    isPending: state.requestReviewer.isPending,
    reviewer: state.requestReviewer.reviewer,
    error: state.requestReviewer.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStartExam: event => dispatch(requestReviewer())
  }
}

class Dashboard extends Component {
  render() {
    let page = ''
    const { isPending, reviewer, error, onStartExam } = this.props
    
    if (isPending) {
      page = <h3>Loading...</h3>
    } else if (error) {
      page = <h3>Error! { typeof error }</h3>
    } else if (reviewer.length > 0) {
      page = <ExamPage reviewer={ reviewer }/>
    }

    return (
      <div className='h-100 pa2 ma2'>
        <h2>Dashboard</h2>
        <button onClick={ onStartExam }>Start Exam</button>
        { page }
      </div>
    );
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
import React, { Component } from 'react'
import ExamPage from '../ExamPage/ExamPage';

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      startExam: false,
      reviewer: {}
    }
  }

  onStartExam = () => {
    this.getReviewer()
    this.setState({
      startExam: true
    })
  }

  getReviewer () {
    fetch('/reviewers/aws-developer-reviewer.json')
      .then((response) => response.json())
      .then((reviewer) => {
        this.setState({ reviewer: reviewer })
      })
  }

  render() {
    let page = ''
    const { startExam, reviewer } = this.state
    if (startExam) {
      page = <ExamPage reviewer={ reviewer }/>
    }
    return (
      <div>
        <h2>Dashboard</h2>
        <button onClick={ this.onStartExam }>Start Exam</button>
        { page }
      </div>
    );
  }
}
 
export default Dashboard;
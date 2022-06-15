import React, { Component } from 'react';

class SkipBtn extends Component {
  render() {
    const { skipQuestion } = this.props
    return (
      <>
        <button onClick={ skipQuestion }>Skip</button>
      </>
    );
  }
}
 
export default SkipBtn;
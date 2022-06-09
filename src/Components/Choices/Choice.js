import React, { Component } from 'react'

class Choice extends Component {
  render() {
    const { choice } = this.props
    return (
      <div>
          <a className="f6 link dim br2 ph3 pv2 mb2 dib white bg-light-purple w-100" href="#0">{ choice }</a>
      </div>
    );
  }
}
 
export default Choice;
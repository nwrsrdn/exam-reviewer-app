import React, { Component } from 'react'

class Question extends Component {
  render() { 
    const { question } = this.props
    return (
      <div className='bg-pink ma3 pa3 mw-100 ph4 br2'>
        <h3>{ question }</h3>
      </div>
    );
  }
}
 
export default Question;
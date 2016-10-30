import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wait from '../components/Wait'
import { browserHistory } from 'react-router'


class WaitContainer extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidUpdate() {
    if(this.props.secondUserConnected) {
      browserHistory.push('/game')
    }
  }
  render() {
    return <div>
      <Wait roomId={this.props.roomId} handleClick={this.props.handleClick} />
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    roomId: state.room,
    secondUserConnected: state.wait.secondUserConnected,
  }
}


export default connect(mapStateToProps)(WaitContainer)

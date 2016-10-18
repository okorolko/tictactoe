import React, { Component } from 'react'
import { connect } from 'react-redux'
import { generateLink } from '../actions'
import Wait from '../components/Wait'
import { browserHistory } from 'react-router'


class WaitContainer extends React.Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    // const link = 'http://localhost:3000/' + Math.floor(Math.random() * (1000000 - 1)) + 1;
    this.props.generateNewLink(this.props.generatedLink)
  }
  componentDidUpdate() {
    console.log('did update', this.props.secondUserConnected);
    if(this.props.secondUserConnected) {
      console.log('www');
      browserHistory.push('/game')
    }
  }
  render() {
    return <div>
      <Wait link={this.props.generatedLink} />
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    generatedLink: state.room.roomId,
    secondUserConnected: state.wait.secondUserConnected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    generateNewLink: (link) => {
      dispatch(generateLink(link))
    }
  }
}
//const WaitContainer = connect(
//  mapStateToProps,
//  mapDispatchToProps
//)(Wait)

export default connect(mapStateToProps, mapDispatchToProps)(WaitContainer)

import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='home__wrap'>
      <ReactCSSTransitionGroup
       transitionName="example"
       transitionAppear={true}
       transitionAppearTimeout={2000}
       transitionEnterTimeout={1100}
       transitionLeaveTimeout={1100}>
          <div className='home__container'>
            <h1 className='home__header'>Welcome to Tic Tac Toe 2000!</h1>
            <div className='home__button_container'>
              <div>
                If you are ready to play, press the button
              </div>
            {/*  <div>
                <select onChange={this.props.onElemClick.bind(this)} ref="selectBox">
                  <option value='3'>Grid 3x3</option>
                  <option value='10'>Grid 10x10</option>
                  <option value='25'>Grid 25x25</option>
                </select>
              </div>*/}
              <div className='home__button_container'>
              <Link to={'wait'}>
                <button className='home__button'>Let's Go!!!</button>
              </Link>
              </div>
            </div>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}


export default Home

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
       transitionName="home"
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

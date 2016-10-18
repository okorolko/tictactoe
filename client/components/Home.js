import React, {Component} from 'react';
import {Link} from 'react-router'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='home__container'>
        <h1 className='home__header'>Welcome to Tic Tac Toe 2000!</h1>
        <div>
          <div>
            If you are ready to play, please press the button
          </div>
          {/*<div>
            <select onChange={this.props.onElemClick.bind(this)} ref="selectBox">
              <option value='3'>Grid 3x3</option>
              <option value='10'>Grid 10x10</option>
              <option value='25'>Grid 25x25</option>
            </select>
          </div>*/}
          <div className='home__button_container'>
          <Link to={'wait'}>
            <button className='home__button'>Let's Go!!</button>
          </Link>
          </div>
        </div>
      </div>
    )
  }
}

// const Home = () => {
//   return (
//     <div className='home__container'>
//       <h1 className='home__header'>Welcome to Tic Tac Toe 2000!</h1>
//       <div>
//         <div>
//           If you are ready to play, please press the button
//         </div>
//         <div>
//           <select ref="selectBox">
//             <option>Grid 3x3</option>
//             <option>Grid 10x10</option>
//             <option>Grid 25x25</option>
//           </select>
//         </div>
//         <div className='home__button_container'>
//         <Link to={'wait'}>
//           <button className='home__button'>Let's Go!!</button>
//         </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

export default Home

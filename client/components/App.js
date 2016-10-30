import React from 'react'
import GridContainer from '../containers/GridContainer'
import PlayersContainer from '../containers/PlayersContainer'
import ChatContainer from '../containers/ChatContainer'

const App = () => (
  <div className='game__container'>
    <h1 className="tictactoe-header">TIC TAC TOE 2000</h1>
    <PlayersContainer />
    <GridContainer />
    <ChatContainer />
  </div>
)

export default App

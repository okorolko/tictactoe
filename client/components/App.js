import React from 'react'
import GridContainer from '../containers/GridContainer'
import PlayersContainer from '../containers/PlayersContainer'
import ChatContainer from '../containers/ChatContainer'

const App = () => (
  <div>
    <PlayersContainer />
    <GridContainer />
    <ChatContainer />
  </div>
)

export default App

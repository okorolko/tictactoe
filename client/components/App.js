import React from 'react';
import GridContainer from '../containers/GridContainer';
import PlayersContainer from '../containers/PlayersContainer';
import ChatContainer from '../containers/ChatContainer';

const App = () => (
  <div className="game__container">
    <h1 className="tictactoe-header">TIC TAC TOE 19</h1>
    <PlayersContainer />
    <div className="gridChat__container">
      <div className="helper"></div>
      <GridContainer />
      <ChatContainer />
    </div>
  </div>
);


export default App;

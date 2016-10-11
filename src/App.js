import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

import './App.css';
import _bind from './utils/bind';

import SelectTeams from './container/SelectTeams';
import GameContainer from './container/GameContainer';

const App = ({teams}) => (
  <div className="App container">
    <SelectTeams />
    {
      [...Array(teams)].map((item,index) => (
        <GameContainer key={index} number={index+1} />
      ))
    }
    
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  teams: state.game.teams
});

App.propTypes = {
  teams: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(App)

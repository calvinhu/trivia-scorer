import React, { PropTypes } from 'react';
import './GameSet.css';
import _bind from '../utils/bind';

import Round from './Round';

const GameSet = ({rounds,questions,scores,teams}) => (
  <div className="GameSet">
    <div className="GameSetContainer">
    {
      [...Array(rounds)].map((item,index) =>
        <Round
          key={index}
          questions={questions}
          scores={scores}
        />
      )
    }
    </div>
  </div>
)

GameSet.propTypes = {
  rounds: PropTypes.number.isRequired,
  questions: PropTypes.number.isRequired,
  scores: PropTypes.array.isRequired,
  teams: PropTypes.number.isRequired
}



export default GameSet;

import React from 'react'
import { connect } from 'react-redux'
import './GameContainer.css'

import GameSet from '../components/GameSet';
import { Form } from 'react-bootstrap';

// const handleChange = (e) => {
//   e.preventDefault();
// }

const GameContainer = ({dispatch,sets,number,teams}) => {

  return (
    <div className="GameContainer row">
      <p className="teamNumber">{number}</p>
      <input type="text" className="teamName form-control" />
      <Form inline className="QuestionsContainer">
        {
          sets.map((set,index) => (
            <GameSet
              key={index}
              rounds={set.rounds}
              questions={set.questions}
              scores={set.scores}
              teams={teams}
            />
          ))
        }
      </Form>


    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  sets: state.game.sets,
  number: ownProps.number,
  teams: state.game.teams
});

export default connect(mapStateToProps)(GameContainer)
import React from 'react'
import { connect } from 'react-redux'
import { changeTeams } from '../actions'
import './SelectTeams.css'

const ChangeTeams = ({dispatch,teams}) => {

  const handleTeamChange = (e) => {
    e.preventDefault();
    dispatch(changeTeams(parseInt(e.target.value, 10)))
  }

  return (
    <div className="SelectTeams">
      <label>Teams</label>
      <select className="teamSelect form-control" onChange={handleTeamChange} value={teams}>
        {
          [...Array(15)].map((item,index) =>
            <option key={index} value={index}>{index}</option>
          )
        }
      </select>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  teams: state.game.teams
});

export default connect(mapStateToProps)(ChangeTeams)
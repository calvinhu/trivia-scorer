import * as constants from '../constants/constants';

const initialState = {
  teams: 12,
  sets: [
    {
      rounds: 3,
      questions: 3,
      scores: [1,3,5]
    },
    {
      rounds: 1,
      questions: 1,
      scores: [1,2,3,4,5,6,7,8,9,10]
    },
    {
      rounds: 3,
      questions: 3,
      scores: [2,4,6]
    },
    {
      rounds: 1,
      questions: 1,
      scores: [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10]
    },
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.CHANGE_TEAMS:
      return Object.assign({}, state, {
        teams: action.teams
      })
    case constants.CHANGE_SETS:
      return Object.assign({}, state, {
        sets: action.value
      })
    case constants.CHANGE_ROUNDS:
      return Object.assign({}, state, {
        rounds: action.value
      })
    case constants.CHANGE_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.value
      })
    default:
      return state
  }
}
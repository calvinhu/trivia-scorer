import * as constants from '../constants/constants';

export const changeTeams = (teams) => ({
  type: constants.CHANGE_TEAMS,
  teams
});
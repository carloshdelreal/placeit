const LOAD_TEAMS = 'LOAD_TEAMS';

const loadTeams = teams => ({
  type: LOAD_TEAMS,
  payload: teams,
});

export {
  loadTeams,
};

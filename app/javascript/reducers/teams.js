
const teamsReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_TEAMS':
      return action.payload;
    default:
      return state;
  }
};

export default teamsReducer;

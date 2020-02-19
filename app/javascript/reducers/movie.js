
const movieReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_MOVIE':
      return action.payload;
    default:
      return state;
  }
};

export default movieReducer;

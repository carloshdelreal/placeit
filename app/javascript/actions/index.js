const LOAD_MOVIE = 'LOAD_MOVIE';

const loadNewMovie = movie => ({
  type: LOAD_MOVIE,
  payload: movie,
});

export {
  loadNewMovie,
};

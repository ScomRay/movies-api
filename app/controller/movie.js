const { Movie } = require('../model/Movie');
const { newMovie, allMovies, searchMovieByTitle, getMovieById, updateMovieById, deleteMovieById, removeMovieById } = require('../actions/movie');

const createMovie = (req, resp) => {
  const data = Movie(req.body);
  newMovie(data)
    .then((movie) => resp.status(201).json(movie))
    .catch((error) => resp.status(400).send(error));
};

const getMovies = (req, resp) => {
  allMovies()
    .then((movies) => resp.status(200).json(movies))
    .catch((error) => resp.status(400).send(error));
};

const getMoviesById = (req, resp) => {
  const { id } = req.params;
  getMovieById(id)
    .then((movie) => movie
      ? resp.status(200).json(movie)
      : resp.status(404).send({message: 'Not found'}))
    .catch((error) => resp.status(400).send(error));
};

const searchMoviesByTitle = (req, resp) => {
  const { data } = req.query;
  searchMovieByTitle(data)
    .then((movie) => movie
      ? resp.status(200).json(movie)
      : resp.status(404).send({message: 'Not found'}))
    .catch((error) => resp.status(400).send(error));
};

const updateMoviesById = (req, resp) => {
  const data = req.body;
  const { id } = req.params;
  updateMovieById(id, data)
    .then((movie) => movie
      ? resp.status(200).json(movie)
      : resp.status(404).send({message: 'Not found'}))
    .catch((error) => resp.status(400).send(error));
};

const deleteMoviesById = (req, resp) => {
  const { id } = req.params;
  deleteMovieById(id)
    .then((movie) => movie
      ? resp.status(200).json(movie)
      : resp.status(404).send({message: 'Not found'}))
    .catch((error) => resp.status(400).send(error));
};

const removeMoviesById = (req, resp) => {
  const { id } = req.params;
  removeMovieById(id)
    .then((movie) => movie
      ? resp.status(200).json(movie)
      : resp.status(404).send({message: 'Not found'}))
    .catch((error) => resp.status(400).send(error));
};

module.exports = {
  createMovie,
  getMovies,
  getMoviesById,
  searchMoviesByTitle,
  updateMoviesById,
  deleteMoviesById,
  removeMoviesById
};

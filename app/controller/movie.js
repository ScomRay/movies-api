const { Movie } = require('../model/Movie');
const { newMovie, allMovies, searchByTitle, MovieById, updateById, deleteById, removeById } = require('../actions/movie');

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

const getMovieById = (req, resp) => {
  const { id } = req.params;
  MovieById(id)
    .then((movie) => movie
      ? resp.status(200).json(movie)
      : resp.status(404).send({message: 'Not found'}))
    .catch((error) => resp.status(400).send(error));
};

const searchMovieByTitle = (req, resp) => {
  const { data } = req.query;
  searchByTitle(data)
    .then((movie) => movie
      ? resp.status(200).json(movie)
      : resp.status(404).send({message: 'Not found'}))
    .catch((error) => resp.status(400).send(error));
};

const updateMovieById = (req, resp) => {
  const data = req.body;
  const { id } = req.params;
  updateById(id, data)
    .then((movie) => movie
      ? resp.status(200).json(movie)
      : resp.status(404).send({message: 'Not found'}))
    .catch((error) => resp.status(400).send(error));
};

const deleteMovieById = (req, resp) => {
  const { id } = req.params;
  deleteById(id)
    .then((movie) => movie
      ? resp.status(200).json(movie)
      : resp.status(404).send({message: 'Not found'}))
    .catch((error) => resp.status(400).send(error));
};

const removeMovieById = (req, resp) => {
  const { id } = req.params;
  removeById(id)
    .then((movie) => movie
      ? resp.status(200).json(movie)
      : resp.status(404).send({message: 'Not found'}))
    .catch((error) => resp.status(400).send(error));
};

module.exports = {
  createMovie,
  getMovies,
  getMovieById,
  searchMovieByTitle,
  updateMovieById,
  deleteMovieById,
  removeMovieById
};

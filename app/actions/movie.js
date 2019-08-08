const { Movie } = require('../model/Movie');

const newMovie = async(data) => {
  return Movie.create(data);
};

const allMovies = async() => {
  return Movie.find({status: true}).sort('title').exec();
};

const getMovieById = async(id) => {
  return Movie.findById(id).where({status: true}).exec();
};

const searchMovieByTitle = async(data) => {
  return Movie.findOne({data}).where({status: true}).exec();
};

const updateMovieById = async(id, data) => {
  return Movie.findByIdAndUpdate(id, {$set: data}, {new: true}).exec();
};

const deleteMovieById = async(id) => {
  return Movie.findByIdAndDelete(id).exec();
};

const removeMovieById = async(id) => {
  return Movie.findByIdAndUpdate(id, {$set: {status: false}}, {new: true});
};

module.exports = {
  newMovie,
  allMovies,
  getMovieById,
  searchMovieByTitle,
  updateMovieById,
  deleteMovieById,
  removeMovieById
};

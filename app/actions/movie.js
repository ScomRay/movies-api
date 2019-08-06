const { Movie } = require('../model/Movie');

const newMovie = async(data) => {
  return Movie.create(data);
};

const allMovies = async() => {
  return Movie.find({status: true}).sort('title').exec();
};

const MovieById = async(id) => {
  return Movie.findById(id).where({status: true}).exec();
};

const searchByTitle = async(data) => {
  return Movie.findOne({data}).where({status: true}).exec();
};

const updateById = async(id, data) => {
  return Movie.findByIdAndUpdate(id, {$set: data}, {new: true}).exec();
};

const deleteById = async(id) => {
  return Movie.findByIdAndDelete(id).exec();
};

const removeById = async(id) => {
  return Movie.findByIdAndUpdate(id, {$set: {status: false}}, {new: true});
};

module.exports = {
  newMovie,
  allMovies,
  MovieById,
  searchByTitle,
  updateById,
  deleteById,
  removeById
};

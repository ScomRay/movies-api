const express = require('express');
const { homeController } = require('../controller/home');
const { createMovie, getMovies, getMovieById, searchMovieByTitle, updateMovieById, deleteMovieById, removeMovieById } = require('../controller/movie');
const router = express.Router();

router.get('/', homeController);

router.post('/movie', createMovie);

router.get('/movies', getMovies);

router.get('/movie/:id', getMovieById);

router.get('/search', searchMovieByTitle);

router.patch('/movie/:id', updateMovieById);

//Borrado Físico
router.delete('/movie/:id', deleteMovieById);

//Borrado lógico
router.delete('/movies/:id', removeMovieById);

module.exports = router;

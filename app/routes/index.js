const express = require('express');
const router = express.Router();
const { homeController } = require('../controller/home');
const movieController = require('../controller/movie');
const userController = require('../controller/user');
const authController = require('../controller/auth');
const isAuthenticated = require('../middleware/isAuthenticated');


router.get('/', isAuthenticated,homeController);

router.post('/movie', movieController.createMovie);

router.get('/movies', movieController.getMovies);

router.get('/movie/:id', movieController.getMoviesById);

router.get('/search/movie', movieController.searchMoviesByTitle);

router.patch('/movie/:id', movieController.updateMoviesById);

router.delete('/movie/:id', movieController.deleteMoviesById);

router.delete('/movies/:id', movieController.removeMoviesById);

router.post('/user', userController.createUser);

router.get('/users', userController.getUsers);

router.get('/user/:id', userController.getUsersById);

router.get('/search/user', userController.searchUsersByName);

router.patch('/user/:id', userController.updateUsersById);

router.delete('/user/:id', userController.deleteUsersById);

router.delete('/users/:id', userController.removeUsersById);

router.get('/user/:email',userController.getUsersByEmail);

router.get('/user/movie', userController.addMoviesToUser);

router.post('/signup', authController.signUp);

router.post('/login', authController.logIn);

module.exports = router;

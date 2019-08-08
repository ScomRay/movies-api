const { User } = require('../model/User');

const createUser = (req, resp) => {
  const data = User(req.body);
  newUser(data)
    .then((user) => resp.status(201).json(user))
    .catch((error) => resp.status(400).send(error));
};

const getUsers = (req, resp) => {
  allUsers()
    .then((users) => resp.status(200).json(users))
    .catch((error) => resp.status(400).send(error));
};

const getUsersById = (req, resp) => {
  const { id } = req.params;
  getUserById(id)
    .then((user) => user
      ? resp.status(200).json(user)
      : resp.status(404).send({message: 'Not found'}))
    .catch((error) => resp.status(400).send(error));
};

const searchUsersByName = (req, resp) => {
  const { data } = req.query;
  searchUserByName(data)
    .then((user) => user
      ? resp.status(200).json(user)
      : resp.status(404).send({message: 'Not found'}))
    .catch((error) => resp.status(400).send(error));
};

const updateUsersById = (req, resp) => {
  const data = req.body;
  const { id } = req.params;
  updateUserById(id, data)
    .then((user) => user
      ? resp.status(200).json(user)
      : resp.status(404).send({message: 'Not found'}))
    .catch((error) => resp.status(400).send(error));
};

const deleteUsersById = (req, resp) => {
  const { id } = req.params;
  deleteUserById(id)
    .then((user) => user
      ? resp.status(200).json(user)
      : resp.status(404).send({message: 'Not found'}))
    .catch((error) => resp.status(400).send(error));
};

const removeUsersById = (req, resp) => {
  const { id } = req.params;
  removeUserById(id)
    .then((user) => user
      ? resp.status(200).json(user)
      : resp.status(404).send({message: 'Not found'}))
    .catch((error) => resp.status(400).send(error));
};

const getUsersByEmail = (req, resp) => {
  const { email } = req.params;
  getUserByEmail(email)
    .then((user) => user
      ? resp.status(200).json(user)
      : resp.status(404).send({message: 'Not found'}))
    .catch((error) => resp.status(400).send(error));
};

const addMoviesToUser = (req, resp) => {
  const { id } = req.params;
  addMovieToUser(id)
    .then((user) => user
      ? resp.status(200).json(user)
      : resp.status(404).send({message: 'Not found'}))
    .catch((error) => resp.status(400).send(error));
};

module.exports = {
  createUser,
  getUsers,
  getUsersById,
  searchUsersByName,
  updateUsersById,
  deleteUsersById,
  removeUsersById,
  getUsersByEmail,
  addMoviesToUser
};


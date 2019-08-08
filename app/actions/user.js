const { User } = require('../model/User');

const createUser = async(data) => {
  return User.create(data);
};

const allUsers = async() => {
  return User.find({status: true}).sort('first-name').select('-password');
};

const getUserById = async(id) => {
  return User.findById(id).where({status: true}).select('-password').populate('posts');
};

const searchUserByName = async(data) => {
  return User.findOne({data}).where({status: true}).select('-password');
};

const updateUserById = async(id, data) => {
  return User.findByIdAndUpdate(id, {$set: data}, {new: true}).select('-password');
};

const deleteUserById = async(id) => {
  return User.findByIdAndDelete(id).select('-password');
};

const removeUserById = async(id) => {
  return User.findByIdAndUpdate(id, {$set: {status: false}}, {new: true}).select('-password');
};

const getUserByEmail = async(email) => {
  return User.findOne({email}).where({status: true}).select('-password');
};

const addMovieToUser = async(id, post) => {
  return User.findByIdAndUpdate(id, {$push: {movies:movie}}).select('-password');
};

module.exports = {
  createUser,
  allUsers,
  getUserById,
  searchUserByName,
  updateUserById,
  deleteUserById,
  removeUserById,
  getUserByEmail,
  addMovieToUser
};

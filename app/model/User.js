const mongoose = require('mongoose');
const bcrypt =  require('bcryptjs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  movies: [{
    type: Schema.Types.ObjectId,
    ref: 'movies'
  }],
  status: {
    type: Boolean,
    default: true
  }
},
{timestamps: true});

UserSchema.pre('save', function (next) {
  let user = this;
  if (user.isModified('password')) {
    return next();
  };
  bcrypt.hash(user.password, 10, (error, hash) => {
    if (error) {
      return next(error);
    };
    user.password = hash;
    return next();
  });
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };

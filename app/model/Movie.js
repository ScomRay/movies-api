const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: Number,
  duration: {
    type: Number,
    default: 90
  },
  genre: {
    type: String,
    enum: ['Comedia','Drama','Acción'],
    required: true
  },
  covers_url: [String],
  director: {
    type: [{
      name: String,
      age: {
        type: Number,
        default: 18
      },
      nationality: {
        type: String,
        enum: ['MX','US'],
        required: true
      }
    }]
  },
  status: {
    type: Boolean,
    default: true
  }
},
{timestamps: true});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = { Movie };

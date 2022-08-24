/*const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5
  },
  userWeight: {
    type: Number,
    min: [50, `Might be a little too small to be lifting safely, maybe eat a couple sandwiches. Minimum weight is 50 lbs.`],
    max: [800, `Might be a little too big to be lifting safely, maybe work on losing some weight before stressing your body with these exercises. Maximum weight is 800 lbs.`],
    default: 150,
    required: true
  },
  userHeight: {
    type: Number,
    min: [48, `Might be a little too small to be lifting weights safely, maybe wait a couple years. Minimum weight is 48 in (4 ft)`],
    max: [96, `Might be a little too big to be lifting safely, maybe use a more specialized workout app. Maximum height is 96 in (8 ft).`],
    required: true
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User; 
*/


const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 4
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
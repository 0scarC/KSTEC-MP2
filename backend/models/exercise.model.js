const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username: { type: String, default: 'Default', required: true },
  type: { type: String, required: true },
  area: { type: String, required: true },
  workoutName: { type: String, required: true },
  weight: {
    type: Number,
    min: [0, `Gravity is working normally, so you cannot lift a negative weight.`],
    max: [500, `Hard to believe you're so strong. Weight limit is 500`],
    default: 0,
    required: true
  },
  reps: {
    type: Number,
    min: [0, `You're meant to be getting STRONGER, so you cannot have negative reps.`],
    max: [100, `Think you're better than One Punch Man, huh? Rep limit is 100.`],
    default: 0,
    required: true
  }
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
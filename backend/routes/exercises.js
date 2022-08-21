const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const type = req.body.type;
  const area = req.body.area;
  const workoutName = req.body.workoutName;
  const weight = Number(req.body.weight);
  const reps = Number(req.body.reps);
  const sets = Number(req.body.sets);

  const newExercise = new Exercise({
    username,
    type,
    area,
    workoutName,
    weight,
    reps,
    sets
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.type = req.body.type;
      exercise.area = req.body.area;
      exercise.workoutName = req.body.workoutName;
      exercise.weight = Number(req.body.weight);
      exercise.reps = Number(req.body.reps);
      exercise.sets = Number(req.body.reps);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
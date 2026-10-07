const express = require('express');
const {
  createWorkout,
  getWorkouts,
  searchWorkouts,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
} = require('../controllers/workoutController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

// NOTE: /search must be declared before /:id so Express doesn't treat
// "search" as an :id value.
router.get('/search', searchWorkouts);

router.route('/').post(createWorkout).get(getWorkouts);

router
  .route('/:id')
  .get(getWorkoutById)
  .put(updateWorkout)
  .delete(deleteWorkout);

module.exports = router;

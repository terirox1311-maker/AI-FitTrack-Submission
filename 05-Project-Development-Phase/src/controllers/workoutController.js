const Workout = require('../models/Workout');

// @desc    Create a new workout
// @route   POST /api/workouts
const createWorkout = async (req, res, next) => {
  try {
    const { workoutName, category, duration, caloriesBurned, workoutDate } =
      req.body;

    const workout = await Workout.create({
      workoutName,
      category,
      duration,
      caloriesBurned,
      workoutDate,
      user: req.user._id,
    });

    res.status(201).json({ success: true, data: workout });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all workouts for the logged-in user
// @route   GET /api/workouts
const getWorkouts = async (req, res, next) => {
  try {
    const workouts = await Workout.find({ user: req.user._id }).sort({
      workoutDate: -1,
    });

    res.status(200).json({
      success: true,
      count: workouts.length,
      data: workouts,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Search workouts by name, category, or date
// @route   GET /api/workouts/search
const searchWorkouts = async (req, res, next) => {
  try {
    const { workoutName, category, workoutDate } = req.query;

    const query = { user: req.user._id };

    if (workoutName) {
      query.workoutName = { $regex: workoutName, $options: 'i' };
    }
    if (category) {
      query.category = category;
    }
    if (workoutDate) {
      const start = new Date(workoutDate);
      const end = new Date(workoutDate);
      end.setDate(end.getDate() + 1);
      query.workoutDate = { $gte: start, $lt: end };
    }

    const workouts = await Workout.find(query).sort({ workoutDate: -1 });

    res.status(200).json({
      success: true,
      count: workouts.length,
      data: workouts,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get a single workout by ID
// @route   GET /api/workouts/:id
const getWorkoutById = async (req, res, next) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!workout) {
      return res
        .status(404)
        .json({ success: false, message: 'Workout not found' });
    }

    res.status(200).json({ success: true, data: workout });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a workout
// @route   PUT /api/workouts/:id
const updateWorkout = async (req, res, next) => {
  try {
    let workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!workout) {
      return res
        .status(404)
        .json({ success: false, message: 'Workout not found' });
    }

    workout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, data: workout });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a workout
// @route   DELETE /api/workouts/:id
const deleteWorkout = async (req, res, next) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!workout) {
      return res
        .status(404)
        .json({ success: false, message: 'Workout not found' });
    }

    await workout.deleteOne();

    res
      .status(200)
      .json({ success: true, message: 'Workout removed successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createWorkout,
  getWorkouts,
  searchWorkouts,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
};

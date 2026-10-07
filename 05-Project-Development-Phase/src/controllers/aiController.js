const {
  getWorkoutRecommendation,
  getFitnessInsights,
} = require('../services/geminiService');

// @desc    Get an AI-generated workout recommendation
// @route   POST /api/ai/workout-recommendation
const workoutRecommendation = async (req, res, next) => {
  try {
    const { age, fitnessGoal, experience } = req.body;

    if (!age || !fitnessGoal || !experience) {
      return res.status(400).json({
        success: false,
        message: 'Please provide age, fitnessGoal, and experience',
      });
    }

    const recommendation = await getWorkoutRecommendation({
      age,
      fitnessGoal,
      experience,
    });

    res.status(200).json({ recommendation });
  } catch (error) {
    next(error);
  }
};

// @desc    Get AI-generated fitness insights from workout stats
// @route   POST /api/ai/fitness-insights
const fitnessInsights = async (req, res, next) => {
  try {
    const { totalWorkouts, averageDuration, totalCaloriesBurned } = req.body;

    if (
      totalWorkouts === undefined ||
      averageDuration === undefined ||
      totalCaloriesBurned === undefined
    ) {
      return res.status(400).json({
        success: false,
        message:
          'Please provide totalWorkouts, averageDuration, and totalCaloriesBurned',
      });
    }

    const insight = await getFitnessInsights({
      totalWorkouts,
      averageDuration,
      totalCaloriesBurned,
    });

    res.status(200).json({ insight });
  } catch (error) {
    next(error);
  }
};

module.exports = { workoutRecommendation, fitnessInsights };

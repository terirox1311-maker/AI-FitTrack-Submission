/**
 * Gemini AI Service
 * Prepares prompts, sends them to the Google Gemini API, and returns
 * formatted text responses. Uses Node's built-in fetch (Node 18+), so no
 * extra SDK dependency is required.
 */

const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-1.5-flash';
const GEMINI_URL = (model) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;

const callGemini = async (prompt) => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not configured');
  }

  const response = await fetch(GEMINI_URL(GEMINI_MODEL), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini API error (${response.status}): ${errText}`);
  }

  const data = await response.json();

  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error('Gemini API returned an empty response');
  }

  return text.trim();
};

// Builds a workout-recommendation prompt from age / goal / experience
const getWorkoutRecommendation = async ({ age, fitnessGoal, experience }) => {
  const prompt = `You are a certified fitness coach. A user with the following
profile needs a personalized workout plan:
- Age: ${age}
- Fitness Goal: ${fitnessGoal}
- Experience Level: ${experience}

Provide a concise weekly workout plan including suggested exercises,
training tips, and safety recommendations suitable for their experience
level. Keep it practical and motivating.`;

  return callGemini(prompt);
};

// Builds a fitness-insights prompt from workout statistics
const getFitnessInsights = async ({
  totalWorkouts,
  averageDuration,
  totalCaloriesBurned,
}) => {
  const prompt = `You are a fitness analyst. A user has the following workout
statistics:
- Total Workouts: ${totalWorkouts}
- Average Workout Duration: ${averageDuration} minutes
- Total Calories Burned: ${totalCaloriesBurned}

Analyze this data and provide a short performance summary, improvement
suggestions, and motivational advice.`;

  return callGemini(prompt);
};

module.exports = { getWorkoutRecommendation, getFitnessInsights };

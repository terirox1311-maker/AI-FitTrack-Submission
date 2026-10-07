# AI FitTrack API

Personalized fitness tracking backend with Google Gemini AI integration.
Built with Node.js, Express.js, MongoDB, and Mongoose (MVC architecture).

## Setup

```bash
npm install
cp .env.example .env   # then fill in real values
npm run dev             # nodemon, or `npm start` for plain node
```

### Required `.env` values
- `MONGO_URI` — your MongoDB connection string (local or Atlas)
- `JWT_SECRET` — any long random string
- `GEMINI_API_KEY` — from https://aistudio.google.com/app/apikey

## Endpoints

| Method | Route | Auth | Description |
|---|---|---|---|
| POST | /api/auth/register | No | Register user |
| POST | /api/auth/login | No | Login, returns JWT |
| GET  | /api/auth/profile | Yes | Get current user |
| POST | /api/workouts | Yes | Create workout |
| GET  | /api/workouts | Yes | List workouts |
| GET  | /api/workouts/search?workoutName=&category=&workoutDate= | Yes | Search workouts |
| GET  | /api/workouts/:id | Yes | Get workout by id |
| PUT  | /api/workouts/:id | Yes | Update workout |
| DELETE | /api/workouts/:id | Yes | Delete workout |
| POST | /api/ai/workout-recommendation | Yes | Body: `{ age, fitnessGoal, experience }` |
| POST | /api/ai/fitness-insights | Yes | Body: `{ totalWorkouts, averageDuration, totalCaloriesBurned }` |

Protected routes require `Authorization: Bearer <token>`.

## Project structure

```
src/
  config/db.js
  models/User.js, Workout.js
  middleware/auth.js, errorHandler.js
  services/jwtService.js, geminiService.js
  controllers/authController.js, workoutController.js, aiController.js
  routes/authRoutes.js, workoutRoutes.js, aiRoutes.js, index.js
  app.js
server.js
```

# Phase 3: Project Design

## Architecture Overview
FitTrack AI follows a layered MVC (Model–View–Controller) architecture.
Routing, business logic, database access, middleware, and AI services are
kept in separate modules.

**Request flow:**
`Client → Express Server → Middleware (JWT auth, validation, CORS) →
Routes → Controller → Model (Mongoose) / Gemini Service → JSON Response`

### Layers
1. **Client Layer** – React app / mobile app / Postman
2. **Express Server Gateway** – parses requests, enables CORS, routes traffic
3. **Authentication Middleware** – validates JWT on every protected route
4. **Route Layer** – `/api/auth`, `/api/workouts`, `/api/ai`
5. **Controller Layer** – request validation + business logic
6. **Service Layer** – `jwtService`, `geminiService`
7. **Model Layer (Mongoose)** – `User`, `Workout`
8. **Database Layer** – MongoDB collections: `users`, `workouts`

## Entity Relationship Design

### User Entity
| Field | Type | Notes |
|---|---|---|
| _id | ObjectId | Primary key |
| name | String | Required |
| email | String | Required, unique |
| password | String | Required, bcrypt-hashed |
| createdAt / updatedAt | Date | Auto timestamps |

### Workout Entity
| Field | Type | Notes |
|---|---|---|
| _id | ObjectId | Primary key |
| user | ObjectId | References `User` |
| workoutName | String | Required |
| category | String | Enum: Cardio, Strength Training, Yoga, Running, Cycling, Walking |
| duration | Number | Minutes, min 1 |
| caloriesBurned | Number | Min 0 |
| workoutDate | Date | Defaults to now |
| createdAt / updatedAt | Date | Auto timestamps |

**Relationship:** `User (1) —creates→ (N) Workout`, maintained via the
`user` field inside the Workout schema.

## MVC Pattern Mapping
- **Model** – `src/models/User.js`, `src/models/Workout.js`
- **View** – there is no server-rendered UI; the "view" is the JSON
  response consumed by API clients (Postman, a future frontend, mobile app)
- **Controller** – `src/controllers/authController.js`,
  `workoutController.js`, `aiController.js`

## Project Folder Structure
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

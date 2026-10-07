# Phase 6: Project Testing

## Testing Tool
Postman (collection provided at
`../05-Project-Development-Phase/FitTrack.postman_collection.json`).

## Test Run Results — Completed

All endpoints were tested end-to-end using Postman against a live MongoDB
Atlas database and the Google Gemini API.

### 1. Authentication APIs
| Test | Method | Endpoint | Result |
|---|---|---|---|
| Register User | POST | `/api/auth/register` | Pass — 201, returns token + user |
| Login User | POST | `/api/auth/login` | Pass — 200, returns token + user |
| Get Profile | GET | `/api/auth/profile` | Pass — 200, returns current user |

### 2. Workout APIs
| Test | Method | Endpoint | Result |
|---|---|---|---|
| Add Workout | POST | `/api/workouts` | Pass — 201, returns created workout |
| Get All Workouts | GET | `/api/workouts` | Pass — 200, returns array + count |
| Search Workouts | GET | `/api/workouts/search?category=Running` | Pass — 200, filtered results |
| Get Workout By ID | GET | `/api/workouts/:id` | Pass — 200, single workout |
| Update Workout | PUT | `/api/workouts/:id` | Pass — 200, updated workout |
| Delete Workout | DELETE | `/api/workouts/:id` | Pass — 200, removal confirmed |

### 3. AI APIs
| Test | Method | Endpoint | Result |
|---|---|---|---|
| Workout Recommendation | POST | `/api/ai/workout-recommendation` | Pass — 200, AI-generated plan returned |
| Fitness Insights | POST | `/api/ai/fitness-insights` | Pass — 200, AI-generated insight returned |

Model used: `gemini-flash-latest`

## Issues Found & Resolved During Testing
- **Duplicate email on register** → confirmed correct behavior: server
  returns `400 "User already exists with this email"` as expected.
- **Invalid token error on protected routes** → caused by a stale/expired
  token left in the Postman collection variable; resolved by re-logging in
  and updating the `token` variable with the fresh value.
- **Gemini 404 "model not found"** → `gemini-1.5-flash` has been
  deprecated by Google; switched `GEMINI_MODEL` in `.env` to
  `gemini-flash-latest` and restarted the server.
- **Gemini 503 "model overloaded"** → temporary Google-side capacity
  issue, not a bug in this project; resolved by retrying the request.

## Edge Cases Verified
- Register with an already-used email → 400
- Access protected routes with no token → 401
- Access protected routes with an invalid/expired token → 401
- Invalid workout `category` value → 400 (enum validation)
- Workout `duration: 0` → 400 (min validation)

## Conclusion
All documented endpoints function as specified. The backend correctly
enforces authentication, validates input, scopes workout data per user,
and successfully integrates with Google Gemini for AI-powered
recommendations and insights.
# Phase 6: Project Testing

## Testing Tool
Postman (collection provided at
`../05-Project-Development-Phase/FitTrack.postman_collection.json`).

## Test Sequence
Run requests in this order so the JWT token from login/register can be
reused for the protected routes below it.

### 1. Authentication APIs
| Test | Method | Endpoint | Expected |
|---|---|---|---|
| Register User | POST | `/api/auth/register` | 201, returns token + user |
| Login User | POST | `/api/auth/login` | 200, returns token + user |
| Get Profile | GET | `/api/auth/profile` | 200, returns current user (requires Bearer token) |

### 2. Workout APIs
| Test | Method | Endpoint | Expected |
|---|---|---|---|
| Add Workout | POST | `/api/workouts` | 201, returns created workout |
| Get All Workouts | GET | `/api/workouts` | 200, returns array + count |
| Search Workouts | GET | `/api/workouts/search?category=Running` | 200, filtered results |
| Get Workout By ID | GET | `/api/workouts/:id` | 200, single workout |
| Update Workout | PUT | `/api/workouts/:id` | 200, updated workout |
| Delete Workout | DELETE | `/api/workouts/:id` | 200, removal confirmation |

### 3. AI APIs
| Test | Method | Endpoint | Expected |
|---|---|---|---|
| Workout Recommendation | POST | `/api/ai/workout-recommendation` | 200, `{ recommendation }` text |
| Fitness Insights | POST | `/api/ai/fitness-insights` | 200, `{ insight }` text |

## Negative / Edge Cases to Verify
- Register with an already-used email → 400
- Login with wrong password → 401
- Access `/api/workouts` with no token → 401
- Access another user's workout by ID → 404 (scoped to `req.user._id`)
- Create workout with an invalid `category` value → 400 (enum validation)
- Create workout with `duration: 0` → 400 (min validation)

## How to Record Results
For each row above, capture: request body, response status, response body
(screenshot or exported Postman run). Save these under this folder as
`test-results/` when you run them against your own MongoDB + Gemini key.

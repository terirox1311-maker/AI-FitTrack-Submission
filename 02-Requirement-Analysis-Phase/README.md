# Phase 2: Requirement Analysis

## Functional Requirements

### Authentication
- Users can register with name, email, and password
- Passwords are encrypted (bcrypt) before storage
- Users can log in and receive a JWT token
- Users can view their own profile

### Workout Management
- Authenticated users can create, view, update, and delete workout records
- Each workout stores: workout name, category, duration, calories burned,
  workout date
- Users can search workouts by name, category, or date
- Every workout belongs to exactly one authenticated user

### AI Integration
- Users can submit age, fitness goal, and experience level and receive an
  AI-generated workout recommendation (weekly plan, exercises, safety tips)
- Users can submit workout statistics (total workouts, average duration,
  total calories burned) and receive AI-generated fitness insights

### Non-Functional Requirements
- All protected routes must validate a JWT before granting access
- API responses are standardized JSON (`success`, `data`/`message`)
- Centralized error handling for validation, auth, and database errors
- Modular MVC codebase for maintainability and future scalability

## Software Requirements
| Component | Requirement |
|---|---|
| OS | Windows 10/11, macOS, or Linux |
| Node.js | v16 or above |
| npm | v8 or above |
| Framework | Express.js |
| Database | MongoDB |
| API testing | Postman / Thunder Client |
| Editor | Visual Studio Code |

## Hardware Requirements
| Component | Requirement |
|---|---|
| Processor | Intel i5 (8th gen+) / AMD Ryzen 5 or equivalent |
| RAM | 8 GB minimum (16 GB recommended) |
| Storage | 1 GB available disk space |

## External Dependencies
- Google Gemini API (`GEMINI_API_KEY`) for AI recommendations and insights
- MongoDB instance (local or Atlas) for persistence

# Phase 4: Project Planning

## Team
- Standard team size: 4 members (min 2, max 5)
- Suggested role split for this project:
  - **Backend/Auth Lead** – User model, JWT auth, middleware
  - **Workout Module Lead** – Workout model, CRUD + search controllers
  - **AI Integration Lead** – Gemini service, AI controller/routes
  - **QA / Documentation Lead** – Postman testing, README, demo video

## Development Plan (Epics)

| Epic | Scope | Status |
|---|---|---|
| Epic 1 | Project Architecture (MVC layers, ER diagram) | Done |
| Epic 2 | Project Setup & Configuration (folders, npm init, dependencies, `.env`) | Done |
| Epic 3 | Backend Development (all modules) | Done |
| Epic 4 | Database Configuration (MongoDB connection, Mongoose schemas) | Done |
| Epic 5 | Project Execution & API Testing (Postman) | See Phase 6 |

## Task Breakdown
1. Scaffold project folder + `package.json`
2. Implement `config/db.js` MongoDB connection
3. Implement `User` and `Workout` Mongoose schemas
4. Implement JWT auth middleware + error-handling middleware
5. Implement `jwtService` and `geminiService`
6. Implement auth, workout, and AI controllers
7. Wire up routes and mount them in `app.js`
8. Write `.env.example` and README
9. Build Postman collection and test every endpoint
10. Record demo video and push phase-wise commits to GitHub

## Milestones
- **M1** – Auth working end-to-end (register/login/profile)
- **M2** – Workout CRUD + search working end-to-end
- **M3** – AI recommendation + insights working end-to-end
- **M4** – Full Postman test pass + documentation complete
- **M5** – Demo video recorded, repo pushed phase-wise, submission ready

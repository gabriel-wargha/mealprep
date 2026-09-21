# MealPrep Planner — CSE 310 Project

A web app that lets you pick recipes, scale them to the number of meals you need, and get a combined shopping list — with accounts and saved plans.

**Chosen stack:** React Router v7 (framework mode = React frontend + Node backend) · SQLite + Prisma · built-in cookie sessions.

---

## What's in this folder

**Start here — the two main documents:**

- **`MealPrep-ReactRouter-Plan.md`** — the full architecture: every file, the database schema, all the loaders/actions, the scaling library, and the auth setup. Your reference for *what the code is*.
- **`MealPrep-ReactRouter-Build-Guide.md`** — the higher-level build guide (6 work sessions on the Mon/Wed/Sat schedule). Your reference for *how the sessions flow*.

**`MealPrep-10-Day-Plan/`** — the day-by-day version, one file per day (Day 01–Day 10). Each has a "Study first" section and a "Build today" section with the actual code. Follows a frontend → backend → database order:

- Days 1–3: Frontend (setup, layout, page UIs)
- Days 4–7: Backend (loaders, actions + scaling, authentication)
- Days 8–10: Database (Prisma setup, swap the data layer, seed + polish + submit)

**`other-stacks-archive/`** — earlier plans for stacks I considered before settling on React Router (Django, and Next.js). Kept for reference; not needed to build the project.

---

## The build order in one line

Frontend first (with hardcoded data) → add the backend loaders/actions → swap the data layer to a real database last. A single file (`app/lib/data.server.js`) is the seam that makes the database swap painless.

## Rubric coverage

Meets all 5 required items (dynamic page, pictures/CSS, user input, error checking, output changes from input) plus all 3 stretch goals (database, extra pages, JS library). The rubric→file map is at the end of `MealPrep-ReactRouter-Plan.md`.

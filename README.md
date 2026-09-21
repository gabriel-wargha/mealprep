# MealPrep Planner — CSE 310 Project

A web app that lets you pick recipes, scale them to the number of meals you need, and get a combined shopping list — with accounts and saved plans.

**Stack:** React Router v7 (framework mode = React frontend + Node backend) · SQLite + Prisma · built-in cookie sessions. Written in plain JavaScript, no TypeScript.

---

## Running it locally

Requires Node 18.18+ (v20 or v22 recommended).

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `build/` |
| `npm start` | Serve the production build |

## Pages

| URL | File | What it does |
| --- | --- | --- |
| `/` | `app/routes/home.jsx` | Pick recipes and meal count, get a shopping list |
| `/recipes/:id` | `app/routes/recipe.jsx` | One recipe's details |
| `/saved` | `app/routes/saved.jsx` | Saved plans (requires login) |
| `/login` | `app/routes/login.jsx` | Log in |
| `/signup` | `app/routes/signup.jsx` | Create an account |

## Project layout

```
app/
  root.jsx          shared layout wrapped around every page
  routes.js         the route table (URL -> file)
  routes/           one file per page
  lib/              data layer, sessions, scaling helpers
  app.css           styles
prisma/             database schema and migrations
```

`~/` is an import alias for `app/`, so `~/lib/data.server` means `app/lib/data.server.js`.

## How it's built

React Router framework mode means each page file can export a `loader` (runs on the server to fetch data for a GET) and an `action` (handles form submits). Files ending in `.server.js` never reach the browser, which is where the database code and secrets live.

All database access goes through one file, `app/lib/data.server.js`. Pages only call functions like `getRecipes()`, so the storage behind them can change without touching any page.

## Status

Built incrementally over 10 sessions: frontend first with hardcoded data, then server loaders and actions, then a real database last.

- [x] Day 1 — Project setup and routing
- [ ] Day 2 — Shared layout and the main form
- [ ] Day 3 — Remaining page UIs
- [ ] Day 4 — Loaders
- [ ] Day 5 — Actions and recipe scaling
- [ ] Day 6 — Auth: sessions, signup, login
- [ ] Day 7 — Auth: protected pages, save and retrieve plans
- [ ] Day 8 — Prisma setup
- [ ] Day 9 — Swap the data layer to Prisma
- [ ] Day 10 — Seed, polish, submit

# Library Demo

This workspace contains a static front-end and a small demo Node.js API to serve books.

Quick start:

1. Install dependencies (requires Node.js >= 14):

```bash
npm install
```

2. Start the demo server:

```bash
npm start
```

3. Open the app in your browser:

```
http://localhost:3000/books.html
```

What this provides:
- `books.html` — updated UI that fetches from `/api/books` and posts to `/api/reserve`.
- `server.js` — minimal Express server exposing `/api/books` and `/api/reserve` using an in-memory array.
- `style.css` — shared styles used across pages.
 - `style.css` — shared styles used across pages.

Firebase (optional)
 - To use Firestore instead of the demo API, create a Firebase project and copy `firebase-config.sample.js` to `firebase-config.js` in the project root. Replace the placeholder values with your project's config.
 - The front-end will automatically try Firestore if `window.FIREBASE_CONFIG` is present; otherwise it falls back to `/api/books` and then to local sample data.

Notes for production:
 - Replace the in-memory array with a real database (Postgres, MySQL, SQLite) or connect to Firestore with proper server-side credentials.
 - Add authentication, rate-limiting, and input validation.
 - Secure Firestore rules for production to prevent unauthorized reads/writes.
 - Serve the frontend as static assets or build a separate frontend project.

# i-Able Rehabilitation Website

This project is a React + Vite website for i-Able Rehabilitation. It includes a home page, a contact/booking page, and serverless API routes under `api/` for working with the Neon Postgres backend.

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Neon Postgres through the `pg` package
- Vercel-style serverless API routes in `api/`

## Project Structure

```text
api/
  appointments.js       # POST endpoint that saves appointment requests to Neon
  test.js               # DB health-check endpoint

src/
  App.jsx               # Router, navbar/footer shell, scroll behavior
  main.jsx              # React entry point
  index.css             # Global Tailwind/theme styles

  Pages/
    HomePage.jsx        # Main website home page
    ContactPage.jsx     # Contact page and appointment form

  Components/
    Navbar.jsx          # Main navigation
    Footer.jsx          # Site footer
    Hero.jsx            # Home hero section
    AboutUs.jsx         # About/aim section
    ServicesSection.jsx # Services section
    FAQ.jsx             # FAQ/outcomes/supporting section

  data/
    contactData.js      # Contact links, service dropdown options, booking notes

  assets/Images/
    Images.js           # Central image imports/exports
```

## Running The Frontend

Install dependencies:

```bash
npm install
```

Start the Vite frontend:

```bash
npm run dev
```

Run production checks:

```bash
npm run lint
npm run build
```

Important: plain `npm run dev` runs the Vite frontend only. It does not run the `api/` serverless routes. The form API route is designed for a Vercel-style environment, where files in `api/` become endpoints such as `/api/appointments`.

## Environment Variables

The backend uses this environment variable:

```text
DATABASE_URL=postgresql://...
```

For local work, keep it in `.env`. For deployment, set `DATABASE_URL` in the hosting provider's environment variable settings. Do not expose this value in frontend code and do not prefix it with `VITE_`; it must stay server-side.

`.env` is ignored by git so the database credentials are not committed.

## Routing Workflow

The app router lives in `src/App.jsx`.

- `/` renders `src/Pages/HomePage.jsx`
- `/contact` renders `src/Pages/ContactPage.jsx`
- Hash links such as `/#services` and `/contact#appointment-form` are handled by `ScrollManager` in `src/App.jsx`
- `Navbar` and `Footer` wrap all pages

To add a new page, create a component in `src/Pages/`, import it in `src/App.jsx`, and add a new `<Route />`.

## Contact Form Submission Workflow

The appointment form is in `src/Pages/ContactPage.jsx`.

The form stores these fields in React state:

- `fullName`
- `phone`
- `email`
- `service`
- `preferredDate`
- `preferredTime`
- `notes`

When the user submits the form:

1. `handleSubmit` prevents the default browser form submit.
2. The UI state changes to `loading`, which disables the submit button.
3. The browser sends a `POST` request to `/api/appointments`.
4. The request body is JSON and contains the current `formData`.
5. The API route validates the required fields.
6. The API route inserts the appointment request into Neon.
7. If the insert succeeds, the frontend shows a success message and clears the form.
8. If the insert fails, the frontend shows the API error message and keeps the form values.

The frontend request is here:

```jsx
fetch("/api/appointments", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});
```

The frontend never connects directly to Neon. The browser only talks to `/api/appointments`; that server-side function reads `process.env.DATABASE_URL` and talks to the database.

## Appointment API Route

The submission endpoint is `api/appointments.js`.

It accepts:

```text
POST /api/appointments
```

It rejects any other method with `405 Method not allowed`.

Required fields:

- `fullName`
- `phone`
- `service`
- `preferredDate`

Optional fields:

- `email`
- `preferredTime`
- `notes`

The API trims string values, validates the date/time format, creates the table if needed, and inserts the row using parameterized SQL.

The success response looks like this:

```json
{
  "success": true,
  "appointment": {
    "id": 1,
    "created_at": "2026-04-23T10:00:00.000Z"
  }
}
```

The error response looks like this:

```json
{
  "success": false,
  "error": "Appointment request could not be submitted."
}
```

## Neon Database Table

The API creates this table automatically if it does not exist:

```sql
CREATE TABLE IF NOT EXISTS appointment_requests (
  id BIGSERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time TIME,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

The insert query maps frontend fields to database columns like this:

| Frontend field | Database column |
| --- | --- |
| `fullName` | `full_name` |
| `phone` | `phone` |
| `email` | `email` |
| `service` | `service` |
| `preferredDate` | `preferred_date` |
| `preferredTime` | `preferred_time` |
| `notes` | `notes` |

## Where To Make Manual Changes

Change form labels, inputs, or submit UI:

```text
src/Pages/ContactPage.jsx
```

Change service dropdown options:

```text
src/data/contactData.js
```

Change WhatsApp, phone, or contact card text:

```text
src/data/contactData.js
```

Change how appointment data is saved:

```text
api/appointments.js
```

Change the database table shape:

```text
api/appointments.js
```

If you add a new form field, update all of these places:

1. `initialFormData` in `src/Pages/ContactPage.jsx`
2. The JSX input/select/textarea in `src/Pages/ContactPage.jsx`
3. The payload validation in `api/appointments.js`
4. The `CREATE TABLE` statement in `api/appointments.js`, if it needs a new column
5. The `INSERT INTO appointment_requests` column list in `api/appointments.js`
6. The SQL values array in `api/appointments.js`

## API Health Check

`api/test.js` is a simple database test endpoint. It runs:

```sql
SELECT NOW()
```

Use it to confirm that the serverless environment can reach the Neon database.

## Common Troubleshooting

If the form works visually but data is not saved, check the browser Network tab for the `/api/appointments` request.

If `/api/appointments` returns `404` locally, you are probably running only Vite with `npm run dev`. Use a serverless dev environment or test after deployment.

If the API says `DATABASE_URL is not configured`, add `DATABASE_URL` to the server-side environment variables for your deployment.

If Neon connection attempts time out, check network/firewall access, the Neon connection string, and whether the database project is active.

If `npm run lint` reports `process` or `Buffer` as undefined in `api/`, check the Node globals override in `eslint.config.js`.

## Validation Checklist

After making changes, run:

```bash
npm run lint
npm run build
```

For form-related changes, also submit a real test appointment in the deployed environment and confirm the row appears in the `appointment_requests` table.

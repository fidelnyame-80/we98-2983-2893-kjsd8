import { Pool } from "pg";

const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 1,
    })
  : null;

const requiredFields = ["fullName", "phone", "service", "preferredDate"];

const normalizeText = (value) =>
  typeof value === "string" ? value.trim() : "";

const isDateValue = (value) => /^\d{4}-\d{2}-\d{2}$/.test(value);

const isTimeValue = (value) => !value || /^\d{2}:\d{2}$/.test(value);

const readBody = async (req) => {
  if (req.body) {
    return typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  }

  const chunks = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");

  return rawBody ? JSON.parse(rawBody) : {};
};

const ensureAppointmentsTable = async () => {
  await pool.query(`
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
    )
  `);
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");

    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  if (!pool) {
    return res.status(500).json({
      success: false,
      error: "DATABASE_URL is not configured",
    });
  }

  try {
    const body = await readBody(req);
    const appointment = {
      fullName: normalizeText(body.fullName),
      phone: normalizeText(body.phone),
      email: normalizeText(body.email),
      service: normalizeText(body.service),
      preferredDate: normalizeText(body.preferredDate),
      preferredTime: normalizeText(body.preferredTime),
      notes: normalizeText(body.notes),
    };

    const missingField = requiredFields.find((field) => !appointment[field]);

    if (missingField) {
      return res.status(400).json({
        success: false,
        error: "Please complete all required fields.",
      });
    }

    if (
      !isDateValue(appointment.preferredDate) ||
      !isTimeValue(appointment.preferredTime)
    ) {
      return res.status(400).json({
        success: false,
        error: "Please enter a valid preferred date and time.",
      });
    }

    await ensureAppointmentsTable();

    const { rows } = await pool.query(
      `
        INSERT INTO appointment_requests (
          full_name,
          phone,
          email,
          service,
          preferred_date,
          preferred_time,
          notes
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id, created_at
      `,
      [
        appointment.fullName,
        appointment.phone,
        appointment.email || null,
        appointment.service,
        appointment.preferredDate,
        appointment.preferredTime || null,
        appointment.notes || null,
      ],
    );

    return res.status(201).json({
      success: true,
      appointment: rows[0],
    });
  } catch (error) {
    console.error("APPOINTMENT SUBMISSION ERROR:", error);

    return res.status(500).json({
      success: false,
      error: "Appointment request could not be submitted.",
    });
  }
}

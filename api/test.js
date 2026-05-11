import { Pool } from "pg";

const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 1,
      idleTimeoutMillis: 10000,
      connectionTimeoutMillis: 10000,
    })
  : null;

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");

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
    const result = await pool.query("SELECT NOW()");
    
    res.status(200).json({
      success: true,
      time: result.rows[0],
    });
  } catch (error) {
    console.error("DB ERROR:", error);
    res.status(500).json({
      success: false,
      error: "Database connection failed",
    });
  }
}

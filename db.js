const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DAILY_SNEAK_PEAK_DB_USER,
  database: 'daily_sneak_peak_development',
  password: process.env.DAILY_SNEAK_PEAK_DB_PASSWORD,
  port: 5432,
  host: 'localhost'
})

module.exports = { pool };

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DAILY_SNEAK_PEAK_DB_USER,
  database: process.env.DAILY_SNEAK_PEAK_DB_NAME,
  password: process.env.DAILY_SNEAK_PEAK_DB_PASSWORD,
  port: 5432,
  host: 'localhost'
})

module.exports = { pool };

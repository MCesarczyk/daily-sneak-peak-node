const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  database: 'daily_sneak_peak_development',
  password: 'password',
  port: 5432,
  host: 'localhost'
})

module.exports = { pool };
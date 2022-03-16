const { pool } = require("../db");

async function insertData() {
  const [name, surname, group] = process.argv.slice(2);
  try {
    const res = await pool.query(
      'INSERT INTO children (name, surname, "group", created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW())',
      [name, surname, group]
    );
    console.log(`Added child ${name} ${surname} to group ${group}`);
  } catch (error) {
    console.error(error);
  }
}

insertData()
const { pool } = require("./db");

async function modifyData() {
  const [id, name, surname, group] = process.argv.slice(2);

  try {
    const res = await pool.query('UPDATE children SET name = $2, surname = $3, "group" = $4 WHERE id = $1', [
      id,
      name,
      surname,
      group
    ]);
    console.log(`Child name updated to ${name}`);
  } catch (error) {
    console.error(error);
  }
}

modifyData()
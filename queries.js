const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const getUsers = next => pool.query("SELECT * FROM users ORDER BY id ASC;", (error, results) => {
    if (error) return error;

    console.log("before:", results.rows)
    return next(results.rows);
  });

const createUser = (config, next) => {
  const { username, email, password, role } = config
  pool.query("INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4)",
  [username, email, password, role],
  (error, results) => {
    if (error) throw new Error(error);

    next(results);
  });
};

module.exports = {
  getUsers,
  createUser
};
const mysql = require("mysql2");
require("dotenv").config();

console.log(
  process.env.host, // Replace with your MySQL server hostname
  process.env.user, // Replace with your MySQL username
  process.env.password, // Replace with your MySQL password
  process.env.database // Replace with your database name}
);

// Create a connection
const connection = mysql.createConnection({
  host: process.env.host, // Replace with your MySQL server hostname
  user: process.env.user, // Replace with your MySQL username
  password: process.env.password, // Replace with your MySQL password
  database: process.env.database, // Replace with your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
    return;
  }
  console.log("Connected to the MySQL database!");
});

// Export the connection (optional)
module.exports = connection;

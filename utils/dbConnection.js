const mysql = require("mysql2");
require("dotenv").config();
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.SQL_PASS,
    database: process.env.SQL_DB,
});

connection.connect((err) => {
    if (err) {
        console.log("Error connecting to database: " + err);
        return;
    }
    console.log("Connected to database");

    const createStudentTable = `CREATE TABLE IF NOT EXISTS students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        NAME VARCHAR(50) NOT NULL,
        EMAIL VARCHAR(100) NOT NULL UNIQUE,
        AGE INT NOT NULL
    )`

    connection.query(createStudentTable, (err, result) => {
        if (err) {
            console.log("Error creating table: " + err);
            return;
        }
        console.log("Students table created successfully");
    });

});

module.exports = connection;

// const mysql = require("mysql2");


require("dotenv").config();
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: process.env.SQL_PASS,
//     database: process.env.SQL_DB,
// });

// connection.connect((err) => {
//     if (err) {
//         console.log("Error connecting to database: " + err);
//         return;
//     }
//     console.log("Connected to database");

//     const createStudentTable = `CREATE TABLE IF NOT EXISTS students (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         NAME VARCHAR(50) NOT NULL,
//         EMAIL VARCHAR(100) NOT NULL UNIQUE,
//         AGE INT NOT NULL
//     )`

//     connection.query(createStudentTable, (err, result) => {
//         if (err) {
//             console.log("Error creating table: " + err);
//             return;
//         }
//         console.log("Students table created successfully");
//     });

// });

// module.exports = connection;


const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.SQL_DB, "root", process.env.SQL_PASS, {
    host: "localhost",
    dialect: "mysql",
});

async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log("Connected to database has been created");
    }
    catch (err) {
        console.log("Error connecting to database: " + err);
    }
}

connectDB();

module.exports = sequelize;

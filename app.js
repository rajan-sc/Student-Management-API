require("dotenv").config();
const express = require("express");
const app = express();
const studentRoute = require("./routes/studentsRoute");
const db = require("./utils/dbConnection");

require("./models");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/students", studentRoute);

db.sync({ force: false }).then(() => {
    console.log("Database synced");
}).catch((err) => {
    console.log("Error syncing database: " + err);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

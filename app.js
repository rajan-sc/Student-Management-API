const express = require("express");
const app = express();
const studentRoute = require("./routes/studentsRoute");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/students", studentRoute);


app.listen(3000, () => {
    console.log("Server started on port 3000");
});

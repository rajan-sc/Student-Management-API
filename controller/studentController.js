const db = require("../utils/dbConnection");

const addEntries = (req, res) => {
    const { name, email, age } = req.body;
    const query = "INSERT INTO students (name, email, age) VALUES (?, ?, ?)";
    db.query(query, [name, email, age], (err, result) => {
        if (err) {
            console.log("Error creating student: " + err);
            return res.status(500).json({ message: "Error creating student" });
        }
        console.log("Student entries added successfully");
        res.status(201).json({ message: "Student entries added successfully" });
    });
}

const getAllEntries = (req, res) => {
    const query = "SELECT * FROM students";
    db.query(query, (err, result) => {
        if (err) {
            console.log("Error fetching students: " + err);
            return res.status(500).json({ message: "Error fetching students" });
        }
        console.log("Students fetched successfully");
        res.status(200).json({ message: "Students fetched successfully", data: result });
    });
}

const getEntryById = (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM students WHERE id = ?";
    db.query(query, [id], (err, result) => {
        if (err) {
            console.log("Error fetching student: " + err);
            return res.status(500).json({ message: "Error fetching student" });
        }
        console.log("Student fetched successfully");
        res.status(200).json({ message: "Student fetched successfully", data: result });
    });
}

const updateEntry = (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const query = "UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?";
    db.query(query, [name, email, age, id], (err, result) => {
        if (err) {
            console.log("Error updating student: " + err);
            return res.status(500).json({ message: "Error updating student" });
        }
        console.log("Student updated successfully");
        res.status(200).json({ message: "Student updated successfully" });
    });
}

const deleteEntry = (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM students WHERE id = ?";
    db.query(query, [id], (err, result) => {
        if (err) {
            console.log("Error deleting student: " + err);
            return res.status(500).json({ message: "Error deleting student" });
        }
        console.log("Student deleted successfully");
        res.status(200).json({ message: "Student deleted successfully" });
    });
}

module.exports = { addEntries, getAllEntries, getEntryById, updateEntry, deleteEntry };

const Student = require("../models/students");

const addEntries = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const student = await Student.create({ name, email, age });
        res.status(201).json({ message: "Student entries added successfully", data: student });
    }
    catch (err) {
        console.log("Error creating student: " + err);
        res.status(500).json({ message: "Error creating student" });
    }
}
const getAllEntries = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.status(200).json({ message: "Students fetched successfully", data: students });
    }
    catch (err) {
        console.log("Error fetching students: " + err);
        res.status(500).json({ message: "Error fetching students" });
    }
}

const getEntryById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByPk(id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student fetched successfully", data: student });
    }
    catch (err) {
        console.log("Error fetching student: " + err);
        res.status(500).json({ message: "Error fetching student" });
    }
}

const updateEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;
        const student = await Student.update({ name, email, age }, { where: { id } });
        res.status(200).json({ message: "Student updated successfully", data: student });
    }
    catch (err) {
        console.log("Error updating student: " + err);
        res.status(500).json({ message: "Error updating student" });
    }
}

const deleteEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.destroy({ where: { id } });
        res.status(200).json({ message: "Student deleted successfully", data: student });
    }
    catch (err) {
        console.log("Error deleting student: " + err);
        res.status(500).json({ message: "Error deleting student" });
    }
}

module.exports = { addEntries, getAllEntries, getEntryById, updateEntry, deleteEntry };

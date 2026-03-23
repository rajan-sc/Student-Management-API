const { student: Student, courses: Course } = require("../models/index");

const addCourse = async (req, res) => {
    try {
        const { name } = req.body;
        const newCourse = await Course.create({ name });
        res.status(201).json(newCourse);
    }
    catch (err) {
        console.log("Error adding course: " + err);
        res.status(500).json({ message: "Error adding course", error: err.message });
    }
}

const addStudentToCourses = async (req, res) => {
    try {
        const { studentId, courseId } = req.body;
        const student = await Student.findByPk(studentId);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        const course = await Course.findByPk(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        await student.addCourse(course);
        const updatedStudent = await Student.findByPk(studentId, { include: Course });
        res.status(201).json({ message: "Student added to course successfully", data: updatedStudent });

    } catch (err) {
        console.log("Error adding student to courses: " + err);
        res.status(500).json({ message: "Error adding student to courses", error: err.message });
    }
}

module.exports = { addCourse, addStudentToCourses };

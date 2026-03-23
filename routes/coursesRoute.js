const express = require("express");
const router = express.Router();

const { addCourse, addStudentToCourses } = require("../controller/courseController");

router.post("/add-course", addCourse);
router.post("/addStudentCourses", addStudentToCourses);

module.exports = router;

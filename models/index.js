const student = require("./students");
const idCard = require("./idCard");
const department = require("./department");
const courses = require("./courses");
const studentCourses = require("./studentCoursesJnction");

//one to one
student.hasOne(idCard);
idCard.belongsTo(student);

//one to many
department.hasMany(student);
student.belongsTo(department);

//many to many
student.belongsToMany(courses, { through: studentCourses });
courses.belongsToMany(student, { through: studentCourses });

module.exports = { student, idCard, department, courses, studentCourses };

const student = require("./students");
const idCard = require("./idCard");
const department = require("./department");

student.hasOne(idCard);
idCard.belongsTo(student);

department.hasMany(student);
student.belongsTo(department);

module.exports = { student, idCard, department };

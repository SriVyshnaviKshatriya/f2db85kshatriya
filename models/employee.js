const mongoose = require("mongoose")
const employeeSchema = mongoose.Schema({
    employee_Name: String,
    employee_age: Number,
    employee_salary: Number
})
module.exports = mongoose.model("employee",
    employeeSchema)
const mongoose = require("mongoose")
const employeeSchema = mongoose.Schema({
Employee_Name: String,
Employee_age: Number,
Employee_salary: Number
})
module.exports = mongoose.model("employee",
employeeSchema)
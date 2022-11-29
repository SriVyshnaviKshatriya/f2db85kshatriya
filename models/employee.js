const mongoose = require("mongoose")
const employeeSchema = mongoose.Schema({
    employee_Name: {
        type: String,
        required: [true, "Name required"]
    },
    employee_age: Number,
    employee_salary:  {
        type: Number,
        min: [1000, "Min value is 1000"],
        max: [6000, "Max value is 6000"]
    }
})
module.exports = mongoose.model("employee", employeeSchema)
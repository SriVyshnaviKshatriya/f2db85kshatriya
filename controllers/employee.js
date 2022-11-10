var employee = require('../models/employee');
// List of all university
exports.employee_list = async function (req, res) {
    try {
        theEmployees = await employee.find();
        res.send(theEmployees);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
exports.employee_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await employee.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle employee create on POST.

exports.employee_create_post = async function (req, res) {
    console.log(res.body)
    let document = new employee();
    document.employee_Name = req.body.employee_Name;
    document.employee_age = req.body.employee_age;
    document.employee_salary = req.body.employee_salary;
    try {
        let result = await document.save();
        res.send({"employee_Name": "Richards hears","Employee_age": 20,"Employee_salary": 1000});
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle university delete form on DELETE.
exports.employee_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await employee.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle university update form on PUT.
exports.employee_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await employee.findById(req.params.id)
        // Do updates of properties
        if (req.body.employee_Name) toUpdate.employee_Name = req.body.employee_Name;
        if (req.body.employee_age) toUpdate.employee_age = req.body.employee_age;
        if (req.body.employee_salary) toUpdate.employee_salary = req.body.employee_salary;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


// VIEWS
// Handle a show all view
exports.employee_view_all_Page = async function (req, res) {
    try {
        theEmployees = await employee.find();
        res.render('employee', {
            title: 'employee Search Results',
            results: theEmployees
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.employee_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await employee.findById(req.query.id)
        res.render('employeedetail', {
            title: 'employee Detail',
            toShow: result
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a zoo.
// No body, no in path parameter, no query.
// Does not need to be async
exports.employee_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('employeecreate', {
            title: 'employee Create'
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a zoo.
// query provides the id
exports.employee_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await employee.findById(req.query.id)
        res.render('employeeupdate', {
            title: 'Employee Update',
            toShow: result
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.employee_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await employee.findById(req.query.id)
        res.render('employeedelete', {
            title: 'Employee Delete',
            toShow: result
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
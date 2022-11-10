var Employee = require('../models/employee');
// List of all employees
exports.employee_list = async function(req, res) {
    try{
    theEmployees = await Employee.find();
    res.send(theEmployees);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific Employee.
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
    console.log(req.body)
    let document = new employee();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    
    document.Employee_Name = req.body.Employee_Name;
    document.Employee_age = req.body.Employee_age;
    document.Employee_salary = req.body.Employee_salary;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle employee delete form on DELETE.
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

// Handle employee update form on PUT.
exports.employee_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await employee.findById(req.params.id)
        // Do updates of properties
        if (req.body.Employee_Name) toUpdate.Employee_Name = req.body.Employee_Name;
        if (req.body.Employee_age) toUpdate.Employee_age = req.body.Employee_age;
        if (req.body.Employee_salary) toUpdate.Employee_salary = req.body.Employee_salary;
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
        theemployees = await employee.find();
        res.render('employee', { title: 'employee Search Results', results: theemployees });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.employee_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await employee.findById(req.query.id)
        res.render('employeedetail',
            { title: 'employee Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a employee.
// No body, no in path parameter, no query.
// Does not need to be async
exports.employee_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('employeecreate', { title: 'employee Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a employee.
// query provides the id
exports.employee_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await employee.findById(req.query.id)
        res.render('employeeupdate', { title: 'employee Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.employee_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await employee.findById(req.query.id)
        res.render('employeedelete', { title: 'employee Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
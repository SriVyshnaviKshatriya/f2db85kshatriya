var Employee = require('../models/employee');
// List of all employees
exports.employee_list = function(req, res) {
res.send('NOT IMPLEMENTED: Employee list');
};
// for a specific Employee.
exports.employee_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Employee detail: ' + req.params.id);
};
// Handle Employee create on POST.
exports.employee_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Employee create POST');
};
// Handle Employee delete form on DELETE.
exports.employee_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Employee delete DELETE ' + req.params.id);
};
// Handle Employee update form on PUT.
exports.employee_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Employee update PUT' + req.params.id);
};
var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var employee_controller = require('../controllers/employee');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// EMPLOYEE ROUTES ///
// POST request for creating a Employee.
router.post('/employees', employee_controller.employee_create_post);
// DELETE request to delete Employee.
router.delete('/employees/:id', employee_controller.employee_delete);
// PUT request to update Employee.
router.put('/employees/:id', employee_controller.employee_update_put);
// GET request for one Employee.
router.get('/employees/:id', employee_controller.employee_detail);
// GET request for list of all Employee items.
router.get('/employees', employee_controller.employee_list);
module.exports = router;
var express = require('express');
const employee = require('../controllers/employee');
var router = express.Router();

/* GET home page. */
router.get('/', employee.employee_view_all_Page);
router.get('/detail', employee.employee_view_one_Page);
router.get('/create', employee.employee_create_Page);
router.get('/update', employee.employee_update_Page);

module.exports = router;
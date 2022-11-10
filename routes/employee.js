var express = require('express');
const employee = require('../controllers/employee');
var router = express.Router();

/* GET home page. */
router.get('/', employee.employee_view_all_Page);

module.exports = router;
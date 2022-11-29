var express = require('express');
const employee = require('../controllers/employee');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
/* GET home page. */
router.get('/', employee.employee_view_all_Page);
router.get('/detail', employee.employee_view_one_Page);
router.get('/create',secured, employee.employee_create_Page);
router.get('/update',secured, employee.employee_update_Page);
router.get('/delete',secured, employee.employee_delete_Page);

module.exports = router;
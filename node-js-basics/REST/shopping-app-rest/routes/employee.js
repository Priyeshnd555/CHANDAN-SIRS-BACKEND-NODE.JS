const express = require('express')
const {saveEmployeeDetails,
    getEmployeeDetaUsingDepartmentModel} = require('../controllers/employee')

const router = express.Router()


router.post('/save',saveEmployeeDetails)
router.get('/employee',getEmployeeDetaUsingDepartmentModel)


module.exports = router
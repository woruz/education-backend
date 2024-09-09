const express = require('express');

const router = express.Router()

router.get('/get_courses', role.get_role)
router.post('/add_courses', role.add_role)
router.post('/update_courses', role.update_role)

module.exports = function(app){
    app.use("/role",router)
}
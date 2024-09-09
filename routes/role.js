const express = require('express');
const { role } = require('../controllers');

const router = express.Router()

router.get('/get_role', role.get_role)
router.post('/add_role', role.add_role)
router.post('/update_role', role.update_role)

module.exports = function(app){
    app.use("/role",router)
}
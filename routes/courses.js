const express = require('express');
const { courses } = require('../controllers');

const router = express.Router()

router.get('/get_courses', courses.get_courses)
router.post('/add_courses', courses.add_courses)
router.post('/update_courses', courses.update_courses)

module.exports = function(app){
    app.use("/course",router)
}
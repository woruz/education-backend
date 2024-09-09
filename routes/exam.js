const express = require('express');
const { exam } = require('../controllers');

const router = express.Router()

router.get('/get_exam', exam.get_exam)
router.post('/add_exam', exam.add_exam)
router.post('/update_exam', exam.update_exam)

module.exports = function(app){
    app.use("/exam",router)
}
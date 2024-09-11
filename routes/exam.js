const express = require('express');
const { exam } = require('../controllers');
const { admin_verify } = require('../lib/middleware/verify');

const router = express.Router()

router.get('/get_exam', admin_verify, exam.get_exam)
router.post('/add_exam', admin_verify, exam.add_exam)
router.post('/update_exam', admin_verify, exam.update_exam)

module.exports = function(app){
    app.use("/exam",router)
}
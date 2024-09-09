const express = require('express');
const { adminAuth } = require('../controllers/index.js');
const router = express.Router()

router.post('/signup', adminAuth.sign_up)
router.post('/signin', adminAuth.sign_in)




module.exports = function(app){
    app.use("/admin",router)
}
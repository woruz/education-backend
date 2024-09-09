const express = require('express');
const { userAuth } = require('../controllers/index.js');
const router = express.Router()

router.post('/signup', userAuth.sign_up)
router.post('/signin', userAuth.sign_in)




module.exports = function(app){
    app.use("/user",router)
}
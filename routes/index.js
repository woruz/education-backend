const adminAuth = require('./adminAuth.js')
const userAuth = require('./userAuth.js')
const role = require('./role.js')
const exam = require("./exam.js")
const studentExamDetails = require("./studentExamDetails.js")


const routes = app => {
    adminAuth(app),
    userAuth(app),
    role(app),
    exam(app),
    studentExamDetails(app)
}

module.exports = routes
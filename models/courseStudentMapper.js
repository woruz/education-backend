const { Schema, model } = require('mongoose')


const courseStudentMapperSchema = new Schema({
    course_id: { type: String, required: [true, "Please provide a course id"] },
    student_id: { type: String, required: [true, "Please provide a student id"] },
},{
    timestamps: true
})

module.exports = model('courseStudentMapper', courseStudentMapperSchema);
const { Schema, model } = require('mongoose')


const studentExamDetailSchema = new Schema({
    student_id: { type: String, required: [true, "Please provide a student id"] },
    exam_id: { type: String, required: [true, "Please provide an exam id"] },
    exam_score: { type: Number, required: [true, "Please provide an exam score"] },
},{
    timestamps: true
})

module.exports = model('studentExamDetail', studentExamDetailSchema);
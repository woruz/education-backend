const { Schema, model } = require('mongoose')


const examSchema = new Schema({
    course_id: { type: String, required: [true, "Please provide a course id"] },
    exam_name: { type: String, unique: true, required: [true, "Please provide a exam name"] },
    exam_date: { type: String, required: [true, "Please provide a exam date"] },
    exam_score: { type: String, required: [true, "Please provide a exam score"] },
    exam_time: { type: String, required: [true, "Please provide a exam time"] },
},{
    timestamps: true
})

module.exports = model('exam', examSchema);
const { Schema, model } = require('mongoose')


const questionSchema = new Schema({
    exam_id: { type: String, required: [true, "Please provide a exam id"] },
    question: { type: String, unique: true, required: [true, "Please provide a question"] },
    answer_type: { type: String, required: [true, "Please provide an answer type"] },
    options: { type: String },
    correct_answer: { type: String, required: [true, "Please provide an answer"] },
},{
    timestamps: true
})

module.exports = model('question', questionSchema);
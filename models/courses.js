const { Schema, model } = require('mongoose')


const courseSchema = new Schema({
    course_name: { type: String, required: [true, "Please provide a course name"] },
    isDeleted: { type: Boolean, default: false },
    price: { type: Number, required: [true, "Please provide a price"] },
},{
    timestamps: true
})

module.exports = model('course', courseSchema);
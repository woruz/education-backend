const { Schema, model } = require('mongoose')


const adminSchema = new Schema({
    name: { type: String, required: [true, "Please provide a name"] },
    role_id: { type: String, required: [true, "Please provide a role id"] },
    email: { type: String, unique: true, required: [true, "Please provide an email"] },
    password: { type: String, required: [true, "Please provide a password"]}
},{
    timestamps: true
})

module.exports = model('admin', adminSchema);
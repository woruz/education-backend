const { Schema, model } = require('mongoose')


const roleSchema = new Schema({
    role_name: { type: String, required: [true, "Please provide a role name"] },
},{
    timestamps: true
})

module.exports = model('role', roleSchema);
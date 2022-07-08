const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RegisterSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: { type: String },
    createdAt: {type: Date}
})

module.exports = mongoose.model('newMoodboardUser', RegisterSchema)
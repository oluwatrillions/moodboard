const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { nanoid } = require('nanoid')

const RegisterSchema = new Schema({
    name: {type: String},
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: { type: String },
    userId: { type: String, default: nanoid() },
    createdAt: {type: Date}
})

module.exports = mongoose.model('newMoodboardUser', RegisterSchema)
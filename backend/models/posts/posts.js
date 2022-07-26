const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Posts = mongoose.Schema({
    postedBy: { type: String },
    title: { type: String, required: true },
    mood: { type: String, required: true },
    createdAt: {type: String}
})

module.exports = mongoose.model('Posts', Posts)
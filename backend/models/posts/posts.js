const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Posts = mongoose.Schema({
    postedBy: { type: String },
    title: { type: String },
    mood: { type: String },
    createdAt: {type: String}
})

module.exports = mongoose.model('Posts', Posts)
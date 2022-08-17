const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {nanoid} = require('nanoid')

const Posts = mongoose.Schema({
    postedBy: { type: String },
    title: { type: String, required: true },
    mood: { type: String, required: true },
    postId: {type: String, default: nanoid()},
    createdAt: {type: String}
})

module.exports = mongoose.model('Posts', Posts)
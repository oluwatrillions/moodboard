const Post = require('../../models/posts/posts')

const getPost = async (req, res, next) => {
    const posts = await Post.find()
    res.json(posts)
    next()
}

const createPost = () => {
    
}

const updatePost = () => {
    
}

const deletePost = () => {
    
}

const getOnePost = () => {
    
}

module.exports = { getPost, createPost, updatePost, deletePost, getOnePost };
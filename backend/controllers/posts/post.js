const Post = require('../../models/posts/posts')
const moment = require('moment')

const getPost = async (req, res) => {
    const posts = await Post.find()
    res.json(posts);
}

const createPost = async (req, res) => {
    const { postedBy, title, mood, createdAt } = req.body
    
    if (!title || !mood) {
        return res.status(400).json({message: 'Please enter a title and your mood'})
    }

    try {
          const newPost = await Post.create({
        postedBy: req.body.postedBy,
        title: req.body.title,
        mood: req.body.mood,
        createdAt: moment().fromNow()
          })
        res.status(201).json({message: 'Post created successfully'})
    } catch (error) {
        console.log(error.message);
    }
}

const updatePost = async (req, res) => {
    if (!req.params.id) {
        return res.status(400).json({message: 'Please enter an id'})
    }

    const updatePost = await Post.findOne({ _id: req.params.id }).exec()

    if (!updatePost) {
        return res.status(404).json({message: 'The id does not exist'})
    }
    
        updatePost.postedBy = req.body.postedBy,
        updatePost.title = req.body.title,
        updatePost.mood = req.body.mood,
        updatePost.createdAt = req.body.createdAt 
    const editedPost = await updatePost.save()

    res.json(editedPost);
}

const deletePost = async (req, res) => {
    if (!req.params.id) {
         return res.status(400).json({message: 'Please enter an id'})
    }
    const post = await Post.findOne({ _id: req.params.id }).exec()
    if (!post) {
        return res.status(404).json({message: 'The id does not exist'})
    }
    const deleted = post.deleteOne()
    res.status(200).json({message: 'Post has been deleted'})
}

const getOnePost = async (req, res) => {
    if (!req.params.id) {
         return res.status(400).json({message: 'Please enter an id'})
    }
    const post = await Post.findOne({ _id: req.params.id }).exec()
    if (!post) {
        return res.status(404).json({message: 'The id does not exist'})
    }
    res.json(post)
}

module.exports = { getPost, createPost, updatePost, deletePost, getOnePost };
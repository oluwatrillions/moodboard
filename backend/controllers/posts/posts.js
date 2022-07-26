const Posts = require('../../models/posts/posts')
const moment = require('moment')

const posts = async (req, res) => {
    const { postedBy, title, mood, createdAt } = req.body
    if (!title || !mood) {
        res.status(400).json({message: 'Please enter a title and your mood.'})
    }

    try {
         const post = await Posts.create({
        postedBy: req.body.postedBy,
        title: req.body.title,
        mood: req.body.mood,
        createdAt: moment().fromNow()
         })
        res.status(201).json({message: 'Your post was successfully created'})
    } catch (error) {
        console.log(error);
    }
}

module.exports = posts;
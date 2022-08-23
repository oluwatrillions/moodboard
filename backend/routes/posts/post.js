const express = require('express')
const router = express.Router()
const postController = require('../../controllers/posts/post')

router.route('/')
    .get(postController.getPost)
    .post(postController.createPost)

router.route('/:id')
    .get(postController.getOnePost)
    .put(postController.updatePost)
    .delete(postController.deletePost)

module.exports = router;
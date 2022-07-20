const express = require('express')
const router = express.Router()
const posts = require('../../controllers/posts/posts')

router.post('/', posts)

module.exports = router;
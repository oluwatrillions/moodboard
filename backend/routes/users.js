const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersControllers')

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createOneUser)

router.route('/:id')
    .put(userController.updateOneUser)
    .delete(userController.deleteUser)
    .get(userController.getOneUser)

module.exports = router;
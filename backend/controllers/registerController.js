const newUser = require('../models/Register')
const bcrypt = require('bcrypt')
const axios = require('axios')


const registerUser = async () => {
    const { name, username, password } = req.body
    
    if (!name || !username || !password) {
        return res.status(204).json({ 'message': 'Please enter your name, username and password' })
    }
    const user = await newUser.find({ username }).exec()
    if (user) {
        return res.status(409).json({ 'message': 'User already exists, please try another name' })
    }

    const hashedPwd = await bcrypt.hash(password, 12)

    try {
        const createdUser = await newUser.create({
            'name': req.body.name,
            'username': req.body.username,
            'password': hashedPwd,
            'email': req.body.email
        });
        res.status(201).json({ 'success': `${name} has been created`})
        console.log(createdUser);
    } catch (error) {
        res.status(500).json({'message': error.response})
        console.log(error.response);
    }
}

module.exports = registerUser
const Users = require('../models/Register')

const getAllUsers = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(401).json({'message': 'Please enter a username and password'})
    }
    const users = await Users.find()
    if (!users) {
        return res.status(204).json({'success': 'No users found'})
    }
    res.json(users)
}
const createOneUser = async (req, res) => {
    const { name, username, password } = req.body
    if (!name || !username || !password) {
        return res.status(400).json({'message': 'Please enter a name, username and password'})
    }
        const duplicate = await Users.findOne({username}).exec()
    if( duplicate ){
        return res.sendStatus(409);
    };
    const newUser = await Users.create({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
    res.status(201).json({'success': `${name} has been created`})
    }
const updateOneUser = async (req, res) => {
    if (!req.params.Id) {
        return res.status(400).json({'error': 'Please enter a user id'})
    }
    try {
        const updatedUser = await Users.findOne({ _id: req.params.id }).exec()
            updatedUser.name = req, body.email,
            updatedUser.username = req.body.username,
            updatedUser.password = req.body.password,
            updatedUser.email = req.body.emal
        const updated = await updatedUser.save();
        res.status(200).json({'success': 'User has been updated successfully'})
        console.log(updated);
    } catch (error) {
        console.log(error.message);
    }    
}
const deleteUser = async (req, res) => {
    if (!req.params.id) {
        return res.status(404).json({'error': 'Please enter an id'})
    }
    try {
        const user = await Users.findOne({ _id: req.params.id }).exec()
        if (!user) {
            return res.status(403).json({'error': 'please enter a valid id'})
        }
            user.deleteOne();
            res.json({'success': `${user.name} has been deleted successfully`})
    } catch (error) {
        console.log(error.message);
    }
    
}
const getOneUser = async (req, res) => {
    if (!req.params.id) {
        res.status(400).json({'message': 'please provide an id'})
    }
    const singleUser = await Users.findOne({ _id: req.params.id }).exec();
    if (!singleUser) {
        return res.status(400).json({'message': 'no user with such id'})
    }
    res.json(singleUser)
}

module.exports = {
    getAllUsers,
    createOneUser,
    updateOneUser,
    deleteUser,
    getOneUser
}
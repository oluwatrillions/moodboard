const Users = require('../models/Register')

const loginController = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).json({'message': 'Please enter the following details'})
    }
    const user = Users.findOne({ username }).exec()
    if (user) {
        return res.status(200).json({'success': 'You are logged in'})
    }
}

module.exports = loginController;
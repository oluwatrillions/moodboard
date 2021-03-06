const Users = require('../models/Register')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



const verifyLogin = async (req, res) => {
    const { user, pwrd } = req.body
    
    if (!user || !pwrd) {
       return res.status(400).json({ 'message': 'Please enter a user and password' })
    }
        
        const foundUser = await Users.findOne({ username: user }).exec()
        
        if (!foundUser) {
            return res.status(401).json({ 'message': 'User does not exist, please enter a valid user' })
        }
        const passwordMatch = await bcrypt.compare(pwrd, foundUser.password)
        if (passwordMatch) {
            const accessToken = await jwt.sign(
                { 'user': foundUser.username },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '30s' }
            );
            console.log(accessToken)

            const refreshToken = jwt.sign(
                { 'user': foundUser.username },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: '30s' }
            );

            foundUser.refreshToken = refreshToken
            const result = await foundUser.save()
            console.log(result);

            res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
            res.json(accessToken);
        } else {
            res.sendStatus(401);
        };
}

    module.exports = { verifyLogin };
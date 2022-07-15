const jwt = require('jsonwebtoken')

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.authorization
    if (!authHeader || !authHeader?.startswith('Bearer')) {
        return res.sendStatus(401);        
    }
    const token = authHeader.split(' ')[1]
    console.log(token);

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN,
        (err, decoded) => {
            if (err) return res.sendStatus(403);
            req.user = decoded.username,
                next()
        }
    )
}

module.exports = verifyJWT
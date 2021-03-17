const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth1 = async (req, res, next) => {
    try {
        const token =  req.session.token
        const decoded = jwt.verify(token, 'thisismynewcourse')
        const user = await User.findOne({ _id: decoded._id })

        console.log("dssd",user)

        if (!user) {
            req.user = null
            return next()
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        req.user = null
        next()
    }
}

module.exports = auth1



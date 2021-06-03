const express = require('express')  
const passport = require('passport')  
const jwt = require('jsonwebtoken')

const User = require('../Models/User')
const { response } = require('express')
const Router = express.Router()

const expirationtimeInMs = 600000
const secret = 'wow123'

Router.get('/', (request, response) => {
    response.json({ message: "Node Cookie JWT Service" })
})

Router.post('/login',async (request, response) => {
    const { email, password } = request.body
     
    const responseData = await User.findOne({ email })

    if (responseData) {
        const payload = {
            username: responseData.email,
            expiration: Date.now() + parseInt(expirationtimeInMs)
        }

        const token = jwt.sign(JSON.stringify(payload), secret)
        response
        .cookie('jwt',
            token, {
                httpOnly: true,
                secure: false 
            }
        )
        .status(200)
        .json({
            message: 'You have logged in :D'
        })

    } else {
    }
    
})

Router.get('/logout', (request, response) => {
    if (request.cookies['jwt']) {
        response
        .clearCookie('jwt')
        .status(200)
        .json({
            message: 'You have logged out'
        })
    } else {
        response.status(401).json({
            error: 'Invalid jwt'
        })
    }
})

Router.get('/protected', 
    passport.authenticate('jwt', { session: false }),
    (request, response) => {
        response.send(200).json({
            message: 'welcome to the protected route!'
        })
    }
)

Router.post

module.exports = Router 
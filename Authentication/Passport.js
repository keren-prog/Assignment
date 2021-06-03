const { request } = require('express')
const passport = require('passport')   
const passportJWT =require('passport-jwt')    
const JWTStrategy = passportJWT.Strategy   


const secret = 'wow123'
const cookieExtractor = request => {
    let jwt = null 

    if (request && request.cookies) {
        jwt = request.cookies['jwt']
    }

    return jwt
}


passport.use('jwt', new JWTStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: secret
}, (jwtPayload, done) => {
    const { expiration } = jwtPayload

    if (Date.now() > expiration) {
        done('Unauthorized', false)
    }

    done(null, jwtPayload)
}))
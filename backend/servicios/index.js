'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
require('dotenv').config()

function createToken(user){

    const payload = {
        sub: user_id,
        iat: moment().unix(),
        exp:moment.add(14, 'days').unix(),
    }

    return jwt.enconde(payload.proccess.env.SECRET_TOKEN)

}

module.exports = {
    createToken
}
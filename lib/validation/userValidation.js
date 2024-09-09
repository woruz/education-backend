const Joi = require('joi')

let validate = (params, schema) => {
    return schema.validate(params)
}

const validate_user_signup = (params) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    })

    return validate(params,schema)
}

const validate_user_signin = (params) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    })

    return validate(params,schema)
}

module.exports = {
    validate_user_signup,
    validate_user_signin
}
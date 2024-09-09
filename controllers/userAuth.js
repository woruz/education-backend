const { errorHandler } = require('../lib/utils/error.js')
const { validate_user_signup, validate_user_signin } = require('../lib/validation/userValidation.js')

module.exports = {
    sign_up: async(req,res,next) => {
        const postData = req.body

        try {
            const validation = validate_user_signup(post_data)

            if(validation.error){
                next(errorHandler(400,validation.error.details[0].message))
            }


        } catch (error) {
            next(error)
        }
    },

    sign_in: async(req,res,next) => {
        const postData = req.body

        try {
            const validation = validate_user_signin(post_data)

            if(validation.error){
                next(errorHandler(400,validation.error.details[0].message))
            }


        } catch (error) {
            next(error)
        }
    }
}
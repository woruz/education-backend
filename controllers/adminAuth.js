const { validate_admin_signup, validate_admin_signin } = require("../lib/validation/adminValidation.js")
const { errorHandler } = require('../lib/utils/error.js')

module.exports = {
    sign_up: async(req,res,next) => {
        const postData = req.body

        try {
            const validation = validate_admin_signup(post_data)

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
            const validation = validate_admin_signin(post_data)

            if(validation.error){
                next(errorHandler(400,validation.error.details[0].message))
            }


        } catch (error) {
            next(error)
        }
    }
}
const bcrypt = require('bcrypt')
const { validate_admin_signup, validate_admin_signin } = require("../lib/validation/adminValidation.js")
const { errorHandler } = require('../lib/utils/error.js')
const admin = require('../models/admin.js')
const { sign_admin } = require('../lib/utils/lib.js')

module.exports = {
    sign_up: async (req, res, next) => {
        const postData = req.body
        const { password } = postData

        try {
            const validation = validate_admin_signup(post_data)

            if (validation.error) {
                next(errorHandler(400, validation.error.details[0].message))
            }



            const hashedPassword = bcrypt.hashSync(password, 10)
            const newUser = new admin({ ...postData, password: hashedPassword })
            const response = await newUser.save()
            res.json({ success: true, message: "Sign-up successful", res: response })
        } catch (error) {
            next(error)
        }
    },

    sign_in: async (req, res, next) => {
        const postData = req.body
        const { email, password } = req.body

        try {
            const validation = validate_admin_signin(post_data)

            if (validation.error) {
                next(errorHandler(400, validation.error.details[0].message))
            }

            const validUser = await User.findOne({ email })

            if (!validUser) {
                return next(errorHandler(404, 'User not found'));
            }

            const validPassword = bcryptjs.compareSync(password, validUser.password);
            if (!validPassword) {
                return next(errorHandler(400, 'Invalid password'));
            }

            const token = sign_admin(validUser)

            const { password: pass, ...rest } = validUser._doc;

            res.status(200).cookie('access_token', token, { httpOnly: true }).json({ success: true, message: 'Login successful', res: rest });
        } catch (error) {
            next(error)
        }
    }
}
const jwt = require('jsonwebtoken')

module.exports = {
    sign_user: (validUser) => {
        const token = jwt.sign(
            { id: validUser._id, role_id: validUser.role_id },
            process.env.JWT_ADMIN_SECRET
        );

        return token
    },

    sign_admin: (validUser) => {
        const token = jwt.sign(
            { id: validUser._id, role_id: validUser.role_id },
            process.env.JWT_USER_SECRET
        );

        return token
    }
}
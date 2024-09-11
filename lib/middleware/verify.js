const jwt = require('jsonwebtoken');
const { errorHandler } = require('../utils/error');


module.exports = {
    user_verify: (req, res, next) => {
        const token = req.cookies.access_token;

        if (!token) {
            return next(errorHandler(401, "Unauthorized"));
        }

        jwt.verify(token, process.env.JWT_USER_SECRET, (err, user) => {
            if (err) {
                return next(errorHandler(401, "Unauthorized"));
            }

            req.user = user;
            next();
        })
    },

    admin_verify: (req,res,next) => {
        const token = req.cookies.access_token;

        if (!token) {
            return next(errorHandler(401, "Unauthorized"));
        }

        jwt.verify(token, process.env.JWT_USER_SECRET, (err, user) => {
            if (err) {
                return next(errorHandler(401, "Unauthorized"));
            }

            req.user = user;
            next();
        })
    }
}
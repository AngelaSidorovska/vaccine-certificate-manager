const logger = require('../logger/logger');
const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    logger.error(`AUTH MIDDLEWARE | Authentication failed for path ${req?.path}`);
    req.flash('error', `Немате дозвола за тоа.`);
    res.redirect('/login');
};

module.exports = isLoggedIn;

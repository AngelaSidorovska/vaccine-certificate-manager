const logger = require('../logger/logger');

const redirectIfLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        logger.error(`REDIRECT IF AUTH MIDDLEWARE | Already authenticated restriction for path ${req?.path}`);
        req.flash('error', `Веќе сте најавени!`);
        return res.redirect('/patients?currentPage=1&pageSize=10');
    }

    next();
};

module.exports = redirectIfLoggedIn;

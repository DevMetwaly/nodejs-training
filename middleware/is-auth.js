module.exports = (req, res, next) => {
    if (!req.session.userId)
        return res.redirect('/sign-in');

    else next();
};
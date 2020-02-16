User = require("../models/User");

exports.getSignIn = (req, res, next) => {
    
    res.render("Auth/Login")
};
exports.postSignIn = (req, res, next) => {
    
    User
        .findOne({
            attributes: ["id"],
            where: {
                email: req.body.email,
                password: req.body.password
            }
        })
        .then(user => {
            if (user) {
                req.session.userId = user.id
                return res.redirect("/")
            }
            res.redirect("/sing-in")
        })
        .catch(err => console.log(err));
};
exports.getSignUp = (req, res, next) => {
    res.render("Auth/Register")
};
exports.postSignUp = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password
    User
        .findOne({ attributes: ["id"], where: { email: req.body.email } })
        .then(user => {

            if (!user) {
                User
                    .create({
                        email: email,
                        password: password,
                    })
                    .then(result => res.redirect('/sign-in'))
                    .catch(err => console.log(err))
            }
            else res.redirect("/sign-up")
        })
        .catch(err => console.log(err));
};

exports.getSignOut = (req, res, next) => {
    req.session.userId = null
    res.redirect("/")
};
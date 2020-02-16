express = require('express');
http = require('http');
bodyParser = require('body-parser');
path = require('path');
session = require('express-session');
csrf = require('csurf');

sequelize = require("./util/database");
bodyParser = require("body-parser");

bookRoutes = require("./routes/Book");
authRoutes = require("./routes/Auth");
profileRoutes = require("./routes/Profile");

User = require("./models/User")
createRelations = require("./models/create_relations")

app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

csrfProtection = csrf();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: "'abdo's secret", resave: false, saveUninitialized: false }))
app.use(csrfProtection)
app.use((req,res,next)=>{
    res.locals.csrfToken = req.csrfToken();
    next();
})
app.use((req, res, next) => {
    res.locals.isAuth = null
    if (req.session.userId)
        User.findByPk(req.session.userId).then(user => {
            req.User = user;
            res.locals.isAuth = user
            next();
        });
    else {
        req.User = null;
        next()
    }

   


})
createRelations()
app.use(bookRoutes);
app.use(authRoutes);
app.use('/profile', profileRoutes);

app.get('/', (req, res, next) => {
    res.render('home');
})


const server = http.createServer(app);
sequelize
    .sync()
    .then(res => {

        server.listen(3000);
    }).catch(err => {
        console.log(err)
    })

server.listen(3000);


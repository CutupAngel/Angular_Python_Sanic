var bodyParser = require('body-parser'),
    express = require('express'),
    passport = require('passport'),
    path = require('path');

module.exports = () => {
    var app = express();
    app.use(passport.initialize());
    // for parsing application/json
    app.use(bodyParser.json());
    // for parsing application/xwww-
    app.use(bodyParser.urlencoded({extended: true}));
    // Configure Express to use EJS
    app.set("views", path.join(__dirname, "../views"));
    app.use(express.static(path.join(__dirname, "../public")));
    if(process.env.NODE_ENV === "development")
    {
        // CORS rquests
        app.use("/", (req, res, next) => {
            res.header("Access-Control-Allow-Origin", "http://localhost:4200");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept, Authorization");
            next();
        });
    }
    app.set("view engine", "ejs");
    // routes
    require('../routes/index')(app);
    require('../routes/User.routes')(app);
    require('../routes/Make.routes')(app);
    require('../routes/Model.routes')(app);
    require('../routes/Ticket.routes')(app);
    require('../routes/Ad.routes')(app);

    console.log("NODE_ENV", process.env.NODE_ENV);
    return app;
};

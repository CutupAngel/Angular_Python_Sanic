var dotenv = require('dotenv'),
    Express = require('./config/express'),
    Mongoose = require('./config/mongoose'),
    MongoDB = require('./config/mongodb'),
    Passport = require('./config/passport');



dotenv.config();

var mongo = MongoDB();
var mongoose = Mongoose();
var server = Express();
var passport = Passport();

// var port = process.env.SERVER_PORT;
var port = 3301;

server.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

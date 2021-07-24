var user = require("../controllers/User.Controller");
var VerifyToken = require('./middleware.js');
module.exports = (app) => {
    app.post("/register", user.register);
    app.post("/login", user.login);

    app.put("/user/:id",VerifyToken,user.update);
    app.delete("/user/:id",VerifyToken,user.delete);
    app.get("/user/:id",VerifyToken,user.findById);

};

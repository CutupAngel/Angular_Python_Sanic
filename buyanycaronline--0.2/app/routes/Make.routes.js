var make = require("../controllers/Make.Controller");
var VerifyToken = require('./middleware.js');
module.exports = (app) => {
    app.post("/make",  VerifyToken,make.create);
    app.delete("/make/:id", VerifyToken, make.delete);
    app.put("/make/:id", VerifyToken, make.update);
    app.get("/make", VerifyToken, make.list);
};

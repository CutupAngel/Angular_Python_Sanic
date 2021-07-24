var adModel = require("../controllers/AdModel.Controller");
var VerifyToken = require('./middleware.js');


module.exports = (app) => {
    app.post('/ads', VerifyToken, adModel.create);
    app.get("/ads", VerifyToken, adModel.list);
    app.delete("/ads/:id", VerifyToken, adModel.delete);
    app.put("/ads/:id", VerifyToken, adModel.update);  

    app.get("/approve/:id", VerifyToken, adModel.approve);
    app.post("/serch", adModel.serch);
};

var model = require("../controllers/Model.Controller");
var VerifyToken = require('./middleware.js');
module.exports = (app) => {
    app.post("/model", VerifyToken, model.create);
    app.delete("/model/:id", VerifyToken, model.delete);
    app.put("/model/:id",  VerifyToken,model.update);
    app.get("/model",  VerifyToken,model.list);
};

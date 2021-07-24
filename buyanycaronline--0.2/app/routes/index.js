var index = index = require("../controllers");
module.exports = (app) => {
    app.get("/", index.render);
};

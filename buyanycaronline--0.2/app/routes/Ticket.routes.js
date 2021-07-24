var ticket = require("../controllers/Ticket.Controller");

module.exports = (app) => {
    app.post("/ticket", ticket.create);
    app.delete("/ticket/:id", ticket.delete);
    app.put("/ticket/:id", ticket.update);
    app.get("/ticket", ticket.list);

};

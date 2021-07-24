var mongoose = require('mongoose'),
    passport = require('passport');
const Ticket = mongoose.model('Ticket');

exports.create = (req, res) => {
        if (!req.body.customerId) {
            return res.status(400).json({message: "All fields required"});
        }
        Ticket.findOne({ name: req.body.customerId }).then(ticket => {
            if (ticket) {
              return res.status(400).json({ name: "ticket for this customer already exists" });
            } else {
                const ticket = new Ticket();
                ticket.customerId = req.body.customerId;
                ticket.save((err) => {
                    if (err) {
                        res.status(404).json(err);
                    } else {
                        res.status(200).json({result:"successfully created!"});
                    }
            });
        }
    });


};
exports.list = (req, res) => {
    Ticket.find(function(err, tickets) {
        if (err) {
            console.log(err);
        } else {
            res.json(tickets);
        }
    }).populate('customerId');
};

exports.delete = (req,res) => {
    Ticket.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
};
exports.update = (req,res) => {
    Ticket.findById(req.params.id, function(err, ticket) {
        if (!ticket)
            res.status(404).send("data is not found");
        else
            ticket.customerId = req.body.customerId;
            ticket.save().then(ticket => {
                res.json('ticket updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
}
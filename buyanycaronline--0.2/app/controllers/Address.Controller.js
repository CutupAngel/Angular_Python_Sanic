var mongoose = require('mongoose'),
    passport = require('passport');
const Address = mongoose.model('Address');

exports.create = (req, res) => {
    if (!req.body.mobile) {
        return res.status(400).json({message: "All fields required"});
    }
    Address.findOne({ modbile: req.body.mobile }).then(address => {
        if (address) {
            return res.status(400).json({ mobile: "address already exists" });
        } else {
            const address = new Address(req.body);
            address.save((err) => {
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
    Address.find(function(err, addresses) {
        if (err) {
            console.log(err);
        } else {
            res.json(addresses);
        }
    });
};

exports.delete = (req,res) => {
    Address.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
};
exports.update = (req,res) => {
    Address.findById(req.params.id, function(err, address) {
        if (!address)
            res.status(404).send("data is not found");
        else
            address.country = req.body.country;
            address.city = req.body.city;
            address.mobile = req.body.mobile;
            address.save().then(address => {
                res.json('address updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
};
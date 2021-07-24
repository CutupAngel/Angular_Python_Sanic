var mongoose = require('mongoose'),
    passport = require('passport');
const Make = mongoose.model('Make');

exports.create = (req, res) => {
    var role = req.type;
    if(role === 0){
        if (!req.body.name) {
            return res.status(400).json({message: "The field required"});
        }
        Make.findOne({ name: req.body.name }).then(make => {
            if (make) {
              return res.status(400).json({ mobile: "Make already exists" });
            } else {
                const make = new Make(req.body);
                make.save((err) => {
                    if (err) {
                        res.status(404).json(err);
                    } else {
                        res.status(200).json({result:"successfully created!"});
                    }
                });
            }
        });
    }
    else{
        res.json("you are not admin.")
    }
};
exports.list = (req, res) => {
    var role = req.type;
    if(role == 0){
        Make.find(function(err, makes) {
            if (err) {
                console.log(err);
            } else {
                res.json(makes);
            }
        });
    }
    else{
        res.json("you are not admin.")
    }
};

exports.delete = (req,res) => {
    var role = req.type;
    if(role == 0){
        Make.findByIdAndRemove({_id: req.params.id}, function(err, business){
            if(err) res.json(err);
            else res.json('Successfully removed');
        });
    }
    else{
        res.json("you are not admin.")
    }
};
exports.update = (req,res) => {
    var role = req.type;
    if(role == 0){
        Make.findById(req.params.id, function(err, make) {
            if (!make)
                res.status(404).send("data is not found");
            else
                make.name = req.body.make;
                make.save().then(address => {
                    res.json('address updated!');
                })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        });
    }
    else{
        res.json("you are not admin.")
    }

}

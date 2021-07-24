var mongoose = require('mongoose'),
    passport = require('passport');
const Boat = mongoose.model('Boats');

exports.create = (req, res) => {
    var role = req.type;
    if(role == 0 || role == 2){   //admin or customer only
        const boat = new Boat(req.body);
        boat.status = false;
        boat.owner = req.userId;
        boat.save((err) => {
            if (err) {
                res.status(404).json(err);
            } else {
                res.status(200).json({result:"successfully created!"});
            }
        });
    }
    else{
        res.json("You are moderator. So you cannot create.");
    }
};

exports.update = (req,res) => {
    role = req.type;
    userId = req.userId;
    if (role == 0 || role == 2){
        Boat.findById(req.params.id, function(err, boat) {
            if(role == 2){
                if(boat.owner == req.userId){ // identify that user is owner of this model
                    Object.assign(boat, req.body);
                    boat.save((err) => {
                        if (err) {
                            res.status(404).json(err);
                        } else {
                            res.status(200).json({result:"successfully Updated!"});
                        }
                    });
                }
                else{
                    res.json('This is not your admodel,so you cannot update it');
                }

            }
            else{
                boat.save((err) => {
                    Object.assign(boat, req.body);
                    if (err) {
                        res.status(404).json(err);
                    } else {
                        res.status(200).json({result:"successfully Updated!"});
                    }
                });
            }

        });
    }
    else{
        res.json("You are moderator. So you cannot update.");
    }
};

exports.delete = (req,res) => {
    var role = req.type;
    var userId = req.userId;
    if(role == 0){
        Boat.findByIdAndRemove({_id: req.params.id}, function(err, business){
            if(err) res.json(err);
            else res.json('Successfully removed');
        });
    }
    else if(role == 2){
        Boat.findById(req.params.id, function(err, boat) {
            if (userId == boat.owner){
                Boat.findByIdAndRemove({_id: req.params.id}, function(err, business){
                    if(err) res.json(err);
                    else res.json('Successfully removed');
                });
            }
            else{
                res.json('this model is not yours , so you cannot delete it')
            }
        });  
    }
    else{
        res.json('you are not admin, u are not allowed to delete it');
    }

};


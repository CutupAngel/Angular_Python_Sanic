var mongoose = require('mongoose'),
    passport = require('passport');
const Motorcycle = mongoose.model('Motorcycle');

exports.create = (req, res) => {
    var role = req.type;
    if(role == 0 || role == 2){   //admin or customer only
        const motorcycle = new Motorcycle(req.body);
        motorcycle.status = false;
        motorcycle.owner = req.userId;
        motorcycle.save((err) => {
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
        Motorcycle.findById(req.params.id, function(err, motorcycle) {
            if(role == 2){
                if(motorcycle.owner == req.userId){ // identify that user is owner of this model
                    Object.assign(motorcycle, req.body);
                    motorcycle.save((err) => {
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
                Object.assign(motorcycle, req.body);
                motorcycle.save((err) => {
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
        Motorcycle.findByIdAndRemove({_id: req.params.id}, function(err, business){
            if(err) res.json(err);
            else res.json('Successfully removed');
        });
    }
    else if(role == 2){
        Motorcycle.findById(req.params.id, function(err, motorcycle) {
            if (userId == motorcycle.owner){
                Motorcycle.findByIdAndRemove({_id: req.params.id}, function(err, business){
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


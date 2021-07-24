var mongoose = require('mongoose'),
    passport = require('passport');
const Vehicle = mongoose.model('Vehicle');

exports.create = (req, res) => {
    var role = req.type;
    if(role == 0 || role == 2){   //admin or customer only
        const vehicle = new Vehicle(req.body);
        vehicle.owner = req.userId;
        vehicle.status = false;
        vehicle.save((err) => {
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
        Vehicle.findById(req.params.id, function(err, vehicle) {            
            if(role == 2){
                if(vehicle.owner == req.userId){ // identify that user is owner of this model
                    Object.assign(vehicle, req.body);
                    vehicle.save((err) => {
                        if (err) {
                            res.status(404).json(err);
                        } else {
                            res.status(200).json({result:"successfully Updated!"});
                        }
                    });
                }
                else{
                    Object.assign(vehicle, req.body);
                    res.json('This is not your admodel,so you cannot update it');
                }
            }
            else{
                vehicle.save((err) => {
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
        Vehicle.findByIdAndRemove({_id: req.params.id}, function(err, business){
            if(err) res.json(err);
            else res.json('Successfully removed');
        });
    }
    else if(role == 2){
        Vehicle.findById(req.params.id, function(err, vehicle) {
            if (userId == vehicle.owner){
                Vehicle.findByIdAndRemove({_id: req.params.id}, function(err, business){
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


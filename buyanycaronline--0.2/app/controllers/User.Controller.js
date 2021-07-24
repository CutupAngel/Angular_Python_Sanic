var mongoose = require('mongoose'),
    mongoError = require('../config/mongooseErrorHandler');
    passport = require('passport');
const User = mongoose.model('User');


exports.register = (req, res) => {
        if (!req.body.username || !req.body.hash) {
            return res.status(400).json({message: "All fields required"});
        }
        const user = new User();
        user.username = req.body.username;
        user.type = req.body.type;
        user.setPassword(req.body.hash);
        console.log("username", user.username + user.salt + user.hash + user);
        user.save((err) => {
            if (err) {
                res.status(400).json(mongoError.getErrorMessage(err));
            } else {
                const token = user.generateJwt();
                res.status(200).json({token});
            }
    });
};

exports.login = (req, res) => {
        if (!req.body.username || !req.body.hash) {
            return res.status(400).json({message: "All fields required"});
        }
        passport.authenticate("local", (err, user, info) => {
            let token;
            if (err) {
                return res.status(400).json(mongoError.getErrorMessage(err));
            }
            if (user) {
                token = user.generateJwt();
                res.status(200).json({token});
            } else {
                let message = {message: "Incorrect username or password"};
                res.status(401).json(message);
            }
        })(req, res);
};

exports.update = (req,res) => {
    var role = req.type;
    var userId = req.userId;
    if (role === 0){
        User.findById(req.params.id, function(err, user) {
            if (!user)
                res.status(404).send("data is not found");
            else
                Object.assign(user, req.body);
            user.setPassword(req.body.hash);
            user.save().then(user => {
                res.json('user updated!');
            })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        });
    }
    else{
        if (userId === req.params.id){
            User.findById(req.params.id, function(err, user) {
                if (!user)
                    res.status(404).send("data is not found");
                else
                    Object.assign(user, req.body);
                user.setPassword(req.body.hash);
                user.save().then(user => {
                    res.json('user updated!');
                })
                    .catch(err => {
                        res.status(400).send("Update not possible");
                    });
            });
        }
        else {
            res.json('You are not owner of this profile. So you cannot update');
        }
    }
};

exports.delete = (req,res) => {
    var userId = req.userId;
    var role = req.type;
    if (role === 0){
        User.findByIdAndRemove({_id: req.params.id}, function(err, business){
            if(err) res.json(err);
            else res.json('Successfully removed');
        });
    }
    else if(role === 2){
        if(userId === req.params.id){
            User.findByIdAndRemove({_id: req.params.id}, function(err, business){
                if(err) res.json(err);
                else res.json('Successfully removed');
            });
        }
        else {
            res.json('You are not owner of this profile. You are not permited');
        }
    }
    else{
        res.json('you are not permited , cannot delete !');
    }
};
exports.findById = (req,res) => {
    var role = req.type;
    if (role === 0){
        User.findById(req.params.id, function(err, user) {
            if (!user)
                res.status(500).send("data is not found");
            else
                res.status(200).json(user);
        });
    }
    else{
        res.json('you are not admin , cannot access !');
    }
};

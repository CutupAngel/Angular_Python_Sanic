var mongoose = require('mongoose'),
    passport = require('passport');
const Model = mongoose.model('Model');

exports.create = (req, res) => {
    var role = req.type;
    if(role == 0){
        if (!req.body.name) {
            return res.status(400).json({message: "All fields required"});
        }
        Model.findOne({ name: req.body.name }).then(model => {
            if (model) {
                return res.status(400).json({ name: "Model already exists" });
            } else {
                const model = new Model(req.body);
                model.save((err) => {
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
        res.json('you are not admin')
    }
};
exports.list = (req, res) => {
    var role = req.type;
    if(type == 0){
        Model.find(function(err, models) {
            if (err) {
                console.log(err);
            } else {
                res.json(models);
            }
        }).populate('make');
    }
    else{
        res.json('you are not admin')
    }
};

exports.delete = (req,res) => {
    var role = req.type;
    if(role == 0){
        Model.findByIdAndRemove({_id: req.params.id}, function(err, business){
            if(err) res.json(err);
            else res.json('Successfully removed');
        });
    }
    else{
        res.json('you are not admin')
    }
};
exports.update = (req,res) => {
    var role = req.type;
    if(role == 0){
        Model.findById(req.params.id, function(err, model) {
            if (!model)
                res.status(404).send("data is not found");
            else
                model.name = req.body.name;
                model.make = req.body.make;
                model.save().then(model => {
                    res.json('model updated!');
                })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        });
    }
    else{
        res.json('you are not admin')
    }
}
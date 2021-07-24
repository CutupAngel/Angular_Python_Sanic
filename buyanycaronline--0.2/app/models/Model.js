var mongoose = require('mongoose');

var ModelSchema = new mongoose.Schema({
  make: { type: mongoose.Schema.Types.ObjectId, ref: 'Make', required: true },
  name: { type: String, required: true, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }},
}, { collection: 'Models', toJSON: { getters: true } });

module.exports = mongoose.model('Model', ModelSchema);
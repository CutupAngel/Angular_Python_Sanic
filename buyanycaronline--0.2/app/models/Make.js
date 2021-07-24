// Schema for Make collection.
// Collection name is specified.  Non-specifid name will be plural of the model name by default.

var mongoose = require('mongoose');

var MakeSchema = new mongoose.Schema({
  name: { type: String, required: true, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
}, { collection: 'Make', toJSON: { getters: true } });

module.exports = mongoose.model('Make', MakeSchema);
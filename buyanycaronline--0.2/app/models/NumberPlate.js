var mongoose = require('mongoose');

var NumberPlateSchema = new mongoose.Schema({
  city: { type: String, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  numberOnPlate: { type: Number,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  NumberCode: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
}, {_id: false, toJSON: { getters: true }});

module.exports = NumberPlateSchema;
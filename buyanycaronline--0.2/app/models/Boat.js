var mongoose = require('mongoose');

var BoatSchema = new mongoose.Schema({
  length: { type: Buffer, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  type: { type: Buffer, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  subType: { type: Buffer, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  hour: { type: Number,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
}, {_id: false, toJSON: { getters: true }});

module.exports = BoatSchema;

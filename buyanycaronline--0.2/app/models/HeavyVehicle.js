var mongoose = require('mongoose');

var HeavyVehicleSchema = new mongoose.Schema({
  distance: { type: Buffer, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  hours: { type: Number, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  HVType: { type: Buffer, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
}, {_id: false, toJSON: { getters: true }});

module.exports = HeavyVehicleSchema;

var mongoose = require('mongoose');

var AddressSchema = mongoose.Schema({
  country: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  city:{ type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  mobile: { type: Number,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
}, { _id: false, toJSON: { getters: true } });

module.exports = mongoose.model('Address', AddressSchema);

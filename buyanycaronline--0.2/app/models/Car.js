var mongoose = require('mongoose');

var CarSchema = new mongoose.Schema({
  distance: { type: Number, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  bodyType: { type: Buffer, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  doors: { type: Buffer, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  transmission: { type: Buffer, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  HP: { type: Buffer, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  color: { type: Buffer, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  regionalSpec: { type: Buffer, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
}, {_id: false, toJSON: { getters: true } });

module.exports = CarSchema;

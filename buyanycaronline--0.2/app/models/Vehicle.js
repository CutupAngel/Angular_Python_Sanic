// Schema for Vehicle being used by Ads collection.
// It contains vehicle fields shared among boats, cars, heavy vehicle and motorcycle.

var mongoose = require('mongoose');

module.exports = function(props) {
	  const params = {
      make: { type: mongoose.Schema.Types.ObjectId, ref: 'Make', required: true },
      model: { type: mongoose.Schema.Types.ObjectId, ref: 'Model', required: true },
      features: [String],
      numOfCylinder: { type: Number, required: true,
        set: function(val) { return val; },
        get: function(val) { return val; }
      },
      year: { type: Number, required: true,
        set: function(val) { return val; },
        get: function(val) { return val; }
      },
      condition: { type: String, required: true,
        set: function(val) { return val; },
        get: function(val) { return val; } 
      },
      fuelType: { type: String, required: true,
        set: function(val) { return val; },
        get: function(val) { return val; }
      },
      warrenty: { type: Boolean, required: true,
        set: function(val) { return val; },
        get: function(val) { return val; }
      },
  };
  if(props) Object.assign(params, props);

  return new mongoose.Schema(params, {_id: false, toJSON: { getters: true }});
};

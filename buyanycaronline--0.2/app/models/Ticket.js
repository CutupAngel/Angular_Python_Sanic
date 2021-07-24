var mongoose = require('mongoose');

var TicketSchema = new mongoose.Schema({
  customerid: {type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true},
}, { collection: 'ticket' });

module.exports = mongoose.model('Ticket', TicketSchema);

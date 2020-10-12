var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var trackSchema = new Schema({
  company: {type: String, required: true},
  title: {type: String, default: 'Engineer'},
  applied: {type: Date},
  nextstep: {type: String, required: true}
},{
  timestamps: true
});
module.exports = mongoose.model('Tracker', trackerSchema);
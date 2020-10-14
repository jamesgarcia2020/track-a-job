const mongoose = require('mongoose');
const Schema = mongoose.Schema;



var trackSchema = new Schema({
  company: {type: String, required: true},
  title: {type: String, default: 'Engineer'},
  dateApplied: {type: Date, default: function () {
    return new Date().getFullYear();
  }},
  location: {type: String},
  level: {type: String},
  nextStep: {type: String, required: true},
  applicationStatus: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
},{
  timestamps: true
});
module.exports = mongoose.model('Track', trackSchema);
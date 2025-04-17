const mongoose = require('mongoose');

const missingSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  assignment: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' },
  reason: String,
  reportedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Missing', missingSchema);
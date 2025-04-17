const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true },
  studentName: { type: String, required: true },
  submissionDate: { type: Date, required: true },
  content: { type: String, required: true },
  grade: { type: String, required: false },
}, { timestamps: true });

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
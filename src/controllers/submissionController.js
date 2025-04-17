const Submission = require('../models/Submission');

// GET all submissions
exports.getAllSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET submission by ID
exports.getSubmissionById = async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);
    if (!submission) {
      return res.status(404).json({ error: 'Submission not found' });
    }
    res.json(submission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE new submission
exports.createSubmission = async (req, res) => {
  try {
    const { lessonId, studentName, submissionDate, content, grade } = req.body;
    const newSubmission = new Submission({ lessonId, studentName, submissionDate, content, grade });
    await newSubmission.save();
    res.status(201).json(newSubmission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE a submission by ID
exports.updateSubmission = async (req, res) => {
  try {
    const updatedSubmission = await Submission.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSubmission) {
      return res.status(404).json({ error: 'Submission not found' });
    }
    res.json(updatedSubmission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE a submission by ID
exports.deleteSubmission = async (req, res) => {
  try {
    const deletedSubmission = await Submission.findByIdAndDelete(req.params.id);
    if (!deletedSubmission) {
      return res.status(404).json({ error: 'Submission not found' });
    }
    res.json({ message: 'Submission deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
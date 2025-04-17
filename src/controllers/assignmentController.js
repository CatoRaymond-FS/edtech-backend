const Assignment = require('../models/Assignment');

// GET assignments by lesson
exports.getAssignmentsByLesson = async (req, res) => {
  try {
    const assignments = await Assignment.find({ lessonId: req.params.lessonId });
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET a single assignment by ID (if needed)
exports.getAssignmentById = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }
    res.json(assignment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST a new assignment (if needed)
exports.createAssignment = async (req, res) => {
  const { lessonId, title, description } = req.body;
  
  try {
    const newAssignment = new Assignment({ lessonId, title, description });
    await newAssignment.save();
    res.status(201).json(newAssignment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT to update an assignment (if needed)
exports.updateAssignment = async (req, res) => {
  try {
    const updatedAssignment = await Assignment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAssignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }
    res.json(updatedAssignment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE an assignment (if needed)
exports.deleteAssignment = async (req, res) => {
  try {
    const deletedAssignment = await Assignment.findByIdAndDelete(req.params.id);
    if (!deletedAssignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }
    res.json({ message: 'Assignment deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const Lesson = require('../models/Lesson');

// GET all lessons
exports.getAllLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET lesson by ID
exports.getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }
    res.json(lesson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE new lesson
exports.createLesson = async (req, res) => {
  try {
    const { title, content, courseId, lessonDate } = req.body;
    const newLesson = new Lesson({ title, content, courseId, lessonDate });
    await newLesson.save();
    res.status(201).json(newLesson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE a lesson by ID
exports.updateLesson = async (req, res) => {
  try {
    const updatedLesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedLesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }
    res.json(updatedLesson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE a lesson by ID
exports.deleteLesson = async (req, res) => {
  try {
    const deletedLesson = await Lesson.findByIdAndDelete(req.params.id);
    if (!deletedLesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }
    res.json({ message: 'Lesson deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');

// Get assignments by lesson (assuming the controller has this method)
router.get('/lesson/:lessonId', assignmentController.getAssignmentsByLesson);

// If you need other routes for CRUD operations, add them as needed
router.get('/:id', assignmentController.getAssignmentById);  // Define getAssignmentById in controller
router.post('/', assignmentController.createAssignment);  // Define createAssignment in controller
router.put('/:id', assignmentController.updateAssignment);  // Define updateAssignment in controller
router.delete('/:id', assignmentController.deleteAssignment);  // Define deleteAssignment in controller

module.exports = router;
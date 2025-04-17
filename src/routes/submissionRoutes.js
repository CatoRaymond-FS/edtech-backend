const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');

// Get all submissions
router.get('/', submissionController.getAllSubmissions);

// Get a single submission by ID
router.get('/:id', submissionController.getSubmissionById);

// Create a new submission
router.post('/', submissionController.createSubmission);

// Update a submission by ID
router.put('/:id', submissionController.updateSubmission);

// Delete a submission by ID
router.delete('/:id', submissionController.deleteSubmission);

module.exports = router;
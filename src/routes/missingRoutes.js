const express = require('express');
const router = express.Router();
const missingController = require('../controllers/missingController');

// Ensure that these handler functions exist in the missingController
router.get('/', missingController.getMissingItems);
router.post('/', missingController.createMissingItem);

module.exports = router;
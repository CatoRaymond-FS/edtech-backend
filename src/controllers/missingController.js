const Missing = require('../models/Missing');  // Correcting the import to match the model name

// GET missing items
exports.getMissingItems = async (req, res) => {
  try {
    const items = await Missing.find();  // Fetch all missing items
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });  // Error handling
  }
};

// POST create a missing item
exports.createMissingItem = async (req, res) => {
  const { name, description } = req.body;  // Expecting name and description from the request body
  try {
    const newItem = new Missing({ name, description });  // Create a new missing item
    await newItem.save();  // Save the item to the database
    res.status(201).json(newItem);  // Respond with the created item
  } catch (err) {
    res.status(500).json({ error: err.message });  // Error handling
  }
};
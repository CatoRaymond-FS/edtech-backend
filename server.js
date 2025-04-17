const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');
const submissionRoutes = require('./src/routes/submissionRoutes');
const lessonRoutes = require('./src/routes/lessonRoutes');
const courseRoutes = require('./src/routes/courseRoutes');
const assignmentRoutes = require('./src/routes/assignmentRoutes');
const missingRoutes = require('./src/routes/missingRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Welcome route for root URL
app.get('/', (req, res) => {
  res.send('Welcome to the EdTech Backend API. Visit /api/users, /api/courses, or other endpoints to test. Visit the frontend at <a href="https://catoraymond-fs.github.io/edtech-backend/">https://catoraymond-fs.github.io/edtech-backend/</a>');
});
app.use('/api/users', userRoutes);
app.use('/api/submissions', submissionRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/missing', missingRoutes);

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => {
    console.log('Error connecting to MongoDB Atlas:', err);
    process.exit(1); // Exit the process if DB connection fails
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
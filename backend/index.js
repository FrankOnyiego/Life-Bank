const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
const helmet = require('helmet');

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

// Create MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blood',
});

// Registration endpoint
app.get('/', (req, res) => {
  res.send('No path specified');
});

app.post(
  '/backend/register',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email address'),
    body('password').notEmpty().withMessage('Password is required').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('confirmPassword').notEmpty().withMessage('Confirm password is required'),
    body('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    }),
  ],
  async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, password } = req.body;

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the user into the database
      pool.query(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, hashedPassword],
        (error, results) => {
          if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }

          // Return success response
          return res.status(200).json({ message: 'User registered successfully' });
        }
      );
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

app.post(
  '/backend/blood-request',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').trim().isEmail().withMessage('Invalid email address'),
    body('contactNumber').trim().notEmpty().withMessage('Contact number is required'),
    body('bloodType').trim().notEmpty().withMessage('Blood type is required'),
    body('quantity').trim().isInt({ min: 1 }).withMessage('Invalid quantity'),
    body('deliveryLocation').trim().notEmpty().withMessage('Delivery location is required'),
  ],
  (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, contactNumber, bloodType, quantity, deliveryLocation } = req.body;

      // Perform additional checks or sanitization if needed
      // ...

      // Insert the blood request into the database
      const query = 'INSERT INTO blood_requests (name, email, contact_number, blood_type, quantity, delivery_location) VALUES (?, ?, ?, ?, ?, ?)';
      const values = [name, email, contactNumber, bloodType, quantity, deliveryLocation];

      pool.query(query, values, (err, result) => {
        if (err) {
          console.error('Error inserting blood request: ', err);
          return res.status(500).json({ error: 'Failed to insert blood request' });
        }

        console.log('Blood request inserted successfully');
        res.status(200).json({ message: 'Blood request submitted successfully' });
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

app.post(
  '/backend/submit-feedback',
  [
    body('rating').trim().notEmpty().withMessage('Rating is required'),
    body('feedback').trim().notEmpty().withMessage('Feedback is required'),
  ],
  (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Extract the feedback data
      const { rating, feedback } = req.body;

      // Perform additional checks or sanitization if needed
      // ...

      // Save the feedback to the database
      pool.query(
        'INSERT INTO donor_feedback (rating, feedback) VALUES (?, ?)',
        [rating, feedback],
        (err, result) => {
          if (err) {
            console.error('Error saving feedback to the database:', err);
            return res.status(500).json({ error: 'Failed to save feedback' });
          }

          console.log('Feedback saved to the database');
          return res.json({ message: 'Feedback submitted successfully' });
        }
      );
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

// Start the server
app.listen(3005, () => {
  console.log('Server started on port 3005');
});

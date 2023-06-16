import React, { useState } from 'react';
import './DonorFeedback.css';

export default function DonorFeedback() {
  const [rating, setRating] = useState('');
  const [feedback, setFeedback] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform validation and sanitization
    const validationErrors = {};
    if (!rating) {
      validationErrors.rating = 'Rating is required';
    }
    if (!feedback) {
      validationErrors.feedback = 'Feedback is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Create an object with the feedback data
    const feedbackData = {
      rating,
      feedback,
    };

    try {
      // Send the feedback data to the server
      const response = await fetch('http://localhost:3005/backend/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        // Feedback submitted successfully
        setRating('');
        setFeedback('');
        setErrors({});
      } else {
        // Error submitting feedback
        const errorData = await response.json();
        alert(`Failed to submit feedback: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error submitting feedback: ', error);
      alert('An error occurred while submitting feedback');
    }
  };

  return (
    <div className="donor-feedback-container">
      <h1 className="donor-feedback-heading">Donor Feedback</h1>
      <form className="donor-feedback-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="rating">Rating:</label>
          <select id="rating" name="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="">Select Rating</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
          {errors.rating && <div className="error-message">{errors.rating}</div>}
        </div>
        <div className="form-field">
          <label htmlFor="feedback">Feedback:</label>
          <textarea id="feedback" name="feedback" rows="4" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
          {errors.feedback && <div className="error-message">{errors.feedback}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

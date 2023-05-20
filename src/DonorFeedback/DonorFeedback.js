import React from 'react';
import './DonorFeedback.css';

export default function DonorFeedback () {
  return (
    <div className="donor-feedback-container">
      <h1 className="donor-feedback-heading">Donor Feedback</h1>
      <form className="donor-feedback-form">
        <div className="form-field">
          <label htmlFor="rating">Rating:</label>
          <select id="rating" name="rating">
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="feedback">Feedback:</label>
          <textarea id="feedback" name="feedback" rows="4" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

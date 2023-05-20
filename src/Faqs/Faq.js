import React from 'react';
import './Faq.css';

export default function FAQ () {
  return (
    <div className="faq-container">
      <h1 className="faq-heading">Frequently Asked Questions</h1>
      <div className="faq-item">
        <h3 className="faq-question">Question 1</h3>
        <p className="faq-answer">Answer 1</p>
      </div>
      <div className="faq-item">
        <h3 className="faq-question">Question 2</h3>
        <p className="faq-answer">Answer 2</p>
      </div>
      <div className="faq-item">
        <h3 className="faq-question">Question 3</h3>
        <p className="faq-answer">Answer 3</p>
      </div>
      {/* Add more FAQ items as needed */}
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page-container">
      <h1>Welcome to Blood Management System!</h1>
      <div className="home-page-link-container">
        <Link to="/user-registration" className="home-page-link">
          User Registration
        </Link>
        <Link to="/donor-management" className="home-page-link">
          Donor Management
        </Link>
        <Link to="/blood-inventory-management" className="home-page-link">
          Blood Inventory Management
        </Link>
        <Link to="/blood-request-management" className="home-page-link">
          Blood Request Management
        </Link>
        <Link to="/appointment-scheduling" className="home-page-link">
          Appointment Scheduling
        </Link>
        <Link to="/user-profile" className="home-page-link">
          User Profile
        </Link>
        <Link to="/donor-feedback" className="home-page-link">
          Donor Feedback and Rating System
        </Link>
        <Link to="/faq" className="home-page-link">
          FAQ Section
        </Link>
      </div>
      <p className="home-page-privacy-text">
        We take your privacy and security seriously. All donor information is protected and our website follows all relevant data protection laws and regulations.
      </p>
      <div className="home-page-social-media-container">
        <p>Follow us on social media:</p>
        <div className="home-page-social-media-icons">
          <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
}

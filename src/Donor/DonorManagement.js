import React from 'react';
import './DonorManagement.css';

function DonorManagement() {
  return (
    <div className="donor-management">
      <h2>Donor Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Blood Type</th>
            <th>Location</th>
            <th>Contact Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>25</td>
            <td>A+</td>
            <td>New York</td>
            <td>john.doe@email.com</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>30</td>
            <td>B-</td>
            <td>Los Angeles</td>
            <td>jane.smith@email.com</td>
          </tr>
          <tr>
            <td>Mike Johnson</td>
            <td>40</td>
            <td>O+</td>
            <td>Chicago</td>
            <td>mike.johnson@email.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DonorManagement;

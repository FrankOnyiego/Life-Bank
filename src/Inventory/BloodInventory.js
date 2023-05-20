import React from 'react';
import './BloodInventory.css';

function BloodInventory() {
  return (
    <div className="blood-inventory-container">
      <h1>Blood Inventory Management</h1>
      <table>
        <thead>
          <tr>
            <th>Blood Type</th>
            <th>Units Available</th>
            <th>Last Donation Date</th>
            <th>Expiration Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A+</td>
            <td>10</td>
            <td>05/01/2023</td>
            <td>06/01/2023</td>
          </tr>
          <tr>
            <td>A-</td>
            <td>5</td>
            <td>05/03/2023</td>
            <td>06/03/2023</td>
          </tr>
          <tr>
            <td>B+</td>
            <td>8</td>
            <td>05/02/2023</td>
            <td>06/02/2023</td>
          </tr>
          <tr>
            <td>B-</td>
            <td>3</td>
            <td>05/04/2023</td>
            <td>06/04/2023</td>
          </tr>
          <tr>
            <td>AB+</td>
            <td>12</td>
            <td>04/30/2023</td>
            <td>05/30/2023</td>
          </tr>
          <tr>
            <td>AB-</td>
            <td>2</td>
            <td>05/05/2023</td>
            <td>06/05/2023</td>
          </tr>
          <tr>
            <td>O+</td>
            <td>15</td>
            <td>04/29/2023</td>
            <td>05/29/2023</td>
          </tr>
          <tr>
            <td>O-</td>
            <td>7</td>
            <td>05/06/2023</td>
            <td>06/06/2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BloodInventory;

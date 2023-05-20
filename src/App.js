import Home from './Home/Home';
import './Home/Home.css'
import DonorManagement from './Donor/DonorManagement';
import Registration from './Registration/Registration';
import BloodInventory from './Inventory/BloodInventory';
import BloodRequest from './BloodRequest/BloodRequest';
import AppointmentScheduling from './Appointment/AppointmentScheduling';
import FAQ from './Faqs/Faq';
import UserProfile from './UserProfile/userprofile';
import DonorFeedback from './DonorFeedback/DonorFeedback';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   <div>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/donor-management" element={<DonorManagement />} />
          <Route path="/user-registration" element={<Registration />} />
          <Route path="/blood-inventory-management" element={<BloodInventory />} />
          <Route path="/blood-request-management" element={<BloodRequest />} />
          <Route path="/appointment-scheduling" element={<AppointmentScheduling />} />
          <Route path="/appointment-scheduling" element={<AppointmentScheduling />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/donor-feedback" element={<DonorFeedback />} />
      </Routes> 
   </div>
  );
}

export default App;

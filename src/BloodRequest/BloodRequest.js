import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './BloodRequest.css';

export default function BloodRequest() {
  const initialValues = {
    name: '',
    email: '',
    contactNumber: '',
    bloodType: '',
    quantity: '',
    deliveryLocation: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    contactNumber: Yup.string().required('Contact Number is required'),
    bloodType: Yup.string().required('Blood Type is required'),
    quantity: Yup.number().positive('Invalid quantity').required('Quantity is required'),
    deliveryLocation: Yup.string().required('Delivery Location is required')
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      // Send POST request to the backend server
      await axios.post('http://localhost:3005/backend/blood-request', values);

      // Reset the form after successful submission
      resetForm();
    } catch (error) {
      console.error(error);
      // Handle any error scenarios
    }
  };

  useEffect(() => {
    // Redirect to a different page after successful submission
    const redirectAfterSubmission = () => {
      //window.location.href = '/success-page';
    };

    redirectAfterSubmission();
  }, []);

  return (
    <div className="blood-request-container">
      <h1 className="blood-request-heading">Request Blood</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {formik => (
          <Form className="blood-request-form">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="form-field">
              <label htmlFor="contactNumber">Contact Number</label>
              <Field type="text" id="contactNumber" name="contactNumber" />
              <ErrorMessage name="contactNumber" component="div" className="error-message" />
            </div>

            <div className="form-field">
              <label htmlFor="bloodType">Blood Type</label>
              <Field as="select" id="bloodType" name="bloodType">
                <option value="">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </Field>
              <ErrorMessage name="bloodType" component="div" className="error-message" />
            </div>

            <div className="form-field">
              <label htmlFor="quantity">Quantity (in ml)</label>
              <Field type="number" id="quantity" name="quantity" />
              <ErrorMessage name="quantity" component="div" className="error-message" />
            </div>

            <div className="form-field">
              <label htmlFor="deliveryLocation">Delivery Location</label>
              <Field type="text" id="deliveryLocation" name="deliveryLocation" />
              <ErrorMessage name="deliveryLocation" component="div" className="error-message" />
            </div>

            <button type="submit" disabled={!formik.isValid}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

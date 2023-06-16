import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './AppointmentScheduling.css';

export default function AppointmentScheduling() {
  const initialValues = {
    name: '',
    email: '',
    contactNumber: '',
    date: '',
    time: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    contactNumber: Yup.string().required('Contact number is required'),
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required')
  });

  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const response = await fetch('http://localhost:3005/backend/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('Failed to submit appointment');
      }

      resetForm();
    } catch (error) {
      console.error('Error submitting appointment:', error);
      alert('Failed to schedule appointment');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="appointment-scheduling-container">
      <h1 className="appointment-scheduling-heading">Schedule an Appointment</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {formik => (
          <Form className="appointment-scheduling-form">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" className="error-message" component="div" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" className="error-message" component="div" />
            </div>
            <div className="form-field">
              <label htmlFor="contactNumber">Contact Number</label>
              <Field type="text" id="contactNumber" name="contactNumber" />
              <ErrorMessage name="contactNumber" className="error-message" component="div" />
            </div>
            <div className="form-field">
              <label htmlFor="date">Date</label>
              <Field type="date" id="date" name="date" />
              <ErrorMessage name="date" className="error-message" component="div" />
            </div>
            <div className="form-field">
              <label htmlFor="time">Time</label>
              <Field type="time" id="time" name="time" />
              <ErrorMessage name="time" className="error-message" component="div" />
            </div>
            <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

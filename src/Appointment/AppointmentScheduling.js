import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './AppointmentScheduling.css';

export default function AppointmentScheduling () {
  const initialValues = {
    name: '',
    email: '',
    contactNumber: '',
    date: '', 
    time: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    contactNumber: Yup.string().required('Required'),
    date: Yup.string().required('Required'),
    time: Yup.string().required('Required')
  });

  const onSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
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
              <ErrorMessage name="name" className="error-message" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" className="error-message" />
            </div>
            <div className="form-field">
              <label htmlFor="contactNumber">Contact Number</label>
              <Field type="text" id="contactNumber" name="contactNumber" />
              <ErrorMessage name="contactNumber" className="error-message" />
            </div>
            <div className="form-field">
              <label htmlFor="date">Date</label>
              <Field type="date" id="date" name="date" />
              <ErrorMessage name="date" className="error-message" />
            </div>
            <div className="form-field">
              <label htmlFor="time">Time</label>
              <Field type="time" id="time" name="time" />
              <ErrorMessage name="time" className="error-message" />
            </div>
            <button type="submit" disabled={!formik.isValid}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

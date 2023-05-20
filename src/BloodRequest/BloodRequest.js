import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './BloodRequest.css';

export default function BloodRequest(){
  const initialValues = {
    name: '',
    email: '',
    contactNumber: '',
    bloodType: '',
    quantity: '',
    deliveryLocation: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    contactNumber: Yup.string().required('Required'),
    bloodType: Yup.string().required('Required'),
    quantity: Yup.number().positive('Invalid quantity').required('Required'),
    deliveryLocation: Yup.string().required('Required')
  });

  const onSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };

  return (
    <div className="blood-request-container">
      <h1 className="blood-request-heading">Request Blood</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {formik => (
          <Form className="blood-request-form">
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
              <ErrorMessage name="bloodType" className="error-message" />
            </div>
            <div className="form-field">
              <label htmlFor="quantity">Quantity (in ml)</label>
              <Field type="number" id="quantity" name="quantity" />
              <ErrorMessage name="quantity" className="error-message" />
            </div>
            <div className="form-field">
              <label htmlFor="deliveryLocation">Delivery Location</label>
              <Field type="text" id="deliveryLocation" name="deliveryLocation" />
              <ErrorMessage name="deliveryLocation" className="error-message" />
            </div>
            <button type="submit" disabled={!formik.isValid}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

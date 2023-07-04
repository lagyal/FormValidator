import React from 'react';
import './App.css';
import {Formik, Form, Field, ErrorMessage} from 'formik';

const App = () => {


  const validateForm  = values => {
    const errors = {};

    if(!values.name) {
      errors.name = 'Name is required';
    }

    if(!values.email) {
      errors.email = 'Please enter an Email';
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if(!values.password) {
      errors.password = 'Password cannot be blank';
    }

    if(!values.dob) {
      errors.dob = 'Please enter your date of birth';
    }
    return errors;
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (

    <Formik
    initialValues={{ name: '', email: '', password: '', dob:''}}
    validate={validateForm }
    onSubmit={handleSubmit}
    >

    <div className='container'>
      <div className='row'>
      <h3 className='text-center my-3'>
        Sign up Form Example
      </h3>
        <div className='col-md-6 mx-auto my-3'>
          <Form>
            <div className='row form-custom p-4'>
              <div className='col-md-12 my-3'>
                <Field type='text' name='name' id='name' placeholder='Name' className='form-control'/>
                <ErrorMessage name="name" component='div' />
              </div>
              <div className='col-md-12 my-3'>
                <Field type='email' name='email' id='email' placeholder='Email' className='form-control'/>
                <ErrorMessage name='email' component='div' />
              </div>
              <div className='col-md-12 my-3'>
                <Field type='password' name='password' id='password' placeholder='Password' className='form-control'/>
                <ErrorMessage name='password' component='div' />
              </div>
              <div className='col-md-12 my-3'>
                <Field type='date' name='dob' id='dob' placeholder='dd-mm-yyyy' className='form-control'/>
                <ErrorMessage name='dob' component='div' />
              </div>
              <div className='col-md-12 my-3'>
                <button className='btn btn-success form-control' type='submit'>Sign up</button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
    </Formik>
  )
}

export default App

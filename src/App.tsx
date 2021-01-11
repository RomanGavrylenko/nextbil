import { Formik } from "formik";
import React from "react";
import TextField from "@/components/forms/TextField";
import LockIcon from '@/assets/images/svg/lock.svg';
import EmailIcon from '@/assets/images/svg/lock.svg';


function App() {

  const initialValues = {
    email: '',
    password: ''
  }

  const handleSubmit = () => {

  }

  return (
    <>
      <div>Good luck!</div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        initialErrors={{
          email: 'Please enter a valid email address'
        }}
        initialTouched={{
          email: true
        }}
      >
        {(props) => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <TextField 
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              value={values["email"]}
              error={errors["email"]}
              touched={touched["email"]}
              placeholder="Email"
              icon={EmailIcon}
            />
            <TextField 
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              value={values["password"]}
              error={errors["password"]}
              touched={touched["password"]}
              placeholder="Enter password"
              icon={LockIcon}
            />
          </form>
        );
      }}
      </Formik>
    </>
  );
}

export default App;

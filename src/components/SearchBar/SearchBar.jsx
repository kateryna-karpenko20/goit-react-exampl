import { Field, Form, Formik } from 'formik';
import React from 'react';

const SearchBar = ({ onChangeQuery }) => {
  const initialValues = {
    query: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    if (values.query.trim()) {
      onChangeQuery(values.query);
      resetForm(); // Optional: Reset the form after submission
    }
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <Field name="query" placeholder="Search..." />
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchBar;

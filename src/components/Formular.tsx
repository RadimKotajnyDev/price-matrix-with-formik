import React from 'react';
import { Formik, Field, Form } from 'formik';

const Formular = ({ initialValues }) => {
  const handleSubmit = (values) => {
    // Zde můžete provést potřebné operace s odeslanými hodnotami formuláře
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        {/* Komponenty Field pro jednotlivá pole formuláře */}
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
        </div>
        {/* Další pole formuláře */}

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Formular;

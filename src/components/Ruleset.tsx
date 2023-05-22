import {ErrorMessage, Field, Form, Formik} from 'formik';
import { useState } from "react";
import {fetchData} from "../API.tsx";

export default function Ruleset() {

  const [data, setData] = useState(fetchData());
  const [formsConfig, setFormsConfig] = useState();


  //console.log(formsConfig)

  return (
    <>
      {formsConfig && formsConfig.map((config: any, index: number) => (
        <Formik
          key={index}
          initialValues={config.initialValues}
          onSubmit={config.onSubmit}
        >
          <Form>
            {Object.keys(config.initialValues).map((field) => (
              <div key={field}>
                <label htmlFor={field}>{field}</label>
                <Field type="text" id={field} name={field} />
                <ErrorMessage name={field} component="div" />
              </div>
            ))}
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      ))}
    </>
  );
}
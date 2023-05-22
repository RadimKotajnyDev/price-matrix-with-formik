import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Formik, FieldArray, Field} from "formik";

const FormularSystem = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7062/pricematrix/1');
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, []);

  console.log(data)
  return (
        <Formik
        initialValues={data}
      onSubmit={(values) => {
        // Manipulace s odeslanými hodnotami
        console.log(values);
      }}
    >
      {({ values }) => (
        <form>
          {/* Nastavení polí formuláře */}
          <FieldArray name="ruleSets">
            {({ push, remove }) => (
              <>
                {values.ruleSets.map((ruleSet, index) => (
                  <div key={index}>
                    {/* Políčka pro jednotlivé pravidlo */}
                    <Field name={`ruleSets[${index}].priority`} />
                    {/* Další políčka pro pravidlo */}
                    {/* ... */}
                    {/* Tlačítko pro odstranění pravidla */}
                    <button type="button" onClick={() => remove(index)}>
                      Odstranit pravidlo
                    </button>
                  </div>
                ))}
                {/* Tlačítko pro přidání pravidla */}
                <button type="button" onClick={() => push({/* Výchozí hodnoty pro nové pravidlo */})}>
                  Přidat pravidlo
                </button>
              </>
            )}
          </FieldArray>
          {/* Další pole formuláře */}
          {/* ... */}
          {/* Tlačítko pro odeslání formuláře */}
          <button type="submit">Odeslat</button>
        </form>
      )}
    </Formik>
  );
};

export default FormularSystem;

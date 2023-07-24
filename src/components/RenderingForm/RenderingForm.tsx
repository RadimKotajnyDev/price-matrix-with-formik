import {FieldArray, Form, Formik} from 'formik';
import {resolveRulesets} from "../../API.tsx";
import Ruleset from "../Ruleset/Ruleset.tsx";
import {Heading} from "./Heading.tsx";
import {HandleRemoveRuleset, AddRuleset, EmptyStringsDataToNull} from "./RenderFunctions.ts";
import {FormBottomButtons} from "./FormBottomButtons.tsx";
import {useEffect, useState} from "react";
import Modal from "./Modal.tsx";

const formConfig = await resolveRulesets()

type Ruleset = {
  priority: number,
  ruleSetId: number,
  rules: []
}

export default function RenderingForm(props: {data: {id: number, name: string}}) {

  const [successModal, setSuccessModal] = useState(false)

  useEffect(() => {
    if (successModal) {
      const timeout = setTimeout(() => {
        setSuccessModal(false)
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [successModal]);


  //console.log(formConfig)
  return (
    <Formik
      initialValues={
      {id: props.data.id, name: props.data.name, ruleSets: formConfig}
    }
      onSubmit={
      (values) => {console.log(values); setSuccessModal(true)}
    }
    >
      {({values, setFieldValue, setValues}) => (
        <Form className="flex justify-center">
          <FieldArray name="rulesets">
            {(/*{push, remove}*/) => (
              <div className="relative mb-20">
                <Modal
                  showState={successModal}
                  openModal={() => setSuccessModal(true)}
                  closeModal={() => setSuccessModal(false)}
                />
                <Heading data={props.data}
                />
                {values.ruleSets.map((ruleSet: Ruleset, index: number) => {
                  //console.log(formConfig);
                  return (
                    <div key={index}>
                      <Ruleset
                        removeRuleset={() => {
                          HandleRemoveRuleset(values, setValues, index)
                        }}
                        ruleSetIndex={index}
                        ruleSetPriority={ruleSet.priority}
                        ruleSetID={ruleSet.ruleSetId}
                        rules={ruleSet.rules}
                        rulesString={`ruleSets[${index}].rules`}
                        offerCode={`ruleSets[${index}].offerCode`}
                        note={`ruleSets[${index}].note`}
                        bookingFeeAbsolute={`ruleSets[${index}].bookingFeeAbsolute`}
                        bookingFeePercent={`ruleSets[${index}].bookingFeePercent`}
                        insideCommission={`ruleSets[${index}].insideCommissionRate`}
                        priceSelling={`ruleSets[${index}].priceSelling`}
                        setFieldValue={setFieldValue}
                        values={values}
                        setValues={setValues}
                      />
                    </div>
                  )
                })}
              </div>
            )}
          </FieldArray>
          <FormBottomButtons addRuleset={() => AddRuleset(values, setValues)} />
        </Form>
      )}
    </Formik>
  );
}
import {FieldArray, Form, Formik} from 'formik';
import {resolveRulesets} from "../../API.tsx";
import RuleSet from "../RuleSet/RuleSet.tsx";
import {Heading} from "./Heading.tsx";
import {AddRuleset, HandleRemoveRuleSet} from "./RenderFunctions.ts";
import {FormBottomButtons} from "./FormBottomButtons.tsx";
import {useEffect, useState} from "react";
import Modal from "./Modal.tsx";
import {schema} from "./validationSchema.ts";

const formConfig = await resolveRulesets()

type RuleSet = {
  priority: number,
  ruleSetId: number,
  rules: [],
  bookingFeeAbsolute: number | "",
  bookingFeePercent: number | "",
  priceSelling: number | "",
  insideCommissionRate: number | ""
}

export default function RenderingForm(props: { data: { id: number, name: string } }) {

  const [successModal, setSuccessModal] = useState(false)
  useEffect(() => {
    if (successModal) {
      const timeout = setTimeout(() => {
        setSuccessModal(false)
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [successModal]);

  return (
    <Formik
      validationSchema={schema}
      initialValues={
        {id: props.data.id, name: props.data.name, ruleSets: formConfig}
      }
      onSubmit={
        (values) => {
          console.log(values); // EmptyStringsDataToNull(values) and refetch data
          setSuccessModal(true)
        }
      }
    >
      {({values, setFieldValue, setValues, errors}) => (
        <Form className="flex justify-center">
          <FieldArray name={`ruleSets`}>
            {(/*{push, remove}*/) => (
              <div className="relative mb-20">
                <Modal
                  showState={successModal}
                  openModal={() => setSuccessModal(true)}
                  closeModal={() => setSuccessModal(false)}
                />
                <Heading data={props.data}
                />
                {values.ruleSets.map((ruleSet: RuleSet, index: number) => {
                  return (
                    <div key={index}>
                      <RuleSet
                        removeRuleSet={() => {
                          HandleRemoveRuleSet(values, setValues, index)
                        }}
                        errors={errors}
                        ruleSetIndex={index}
                        ruleSetPriority={ruleSet.priority}
                        ruleSetID={ruleSet.ruleSetId}
                        rules={ruleSet.rules}
                        rulesString={`ruleSets[${index}].rules`}
                        offerCode={`ruleSets[${index}].offerCode`}
                        note={`ruleSets[${index}].note`}
                        bookingFeeAbsoluteValue={ruleSet.bookingFeeAbsolute}
                        bookingFeePercentValue={ruleSet.bookingFeePercent}
                        priceSellingValue={ruleSet.priceSelling}
                        insideCommissionRateValue={ruleSet.insideCommissionRate}
                        bookingFeeAbsolute={`ruleSets[${index}].bookingFeeAbsolute`}
                        bookingFeePercent={`ruleSets[${index}].bookingFeePercent`}
                        insideCommissionRate={`ruleSets[${index}].insideCommissionRate`}
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
          <FormBottomButtons addRuleset={() => AddRuleset(values, setValues)}/>
        </Form>
      )}
    </Formik>
  );
}
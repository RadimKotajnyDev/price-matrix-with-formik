import {FieldArray, Form, Formik} from 'formik';
import {resolveRulesets} from "../../API.tsx";
import Ruleset from "../Ruleset/Ruleset.tsx";
import {Heading} from "./Heading.tsx";
import {HandleRemoveRuleset, AddRuleset} from "./RenderFunctions.ts";
import {FormBottomButtons} from "./FormBottomButtons.tsx";

const formConfig = await resolveRulesets()

export default function RenderingForm(props: any) {

  //console.log(formConfig)
  return (
    <Formik
      initialValues={{rulesets: formConfig}}
      onSubmit={(values) => console.log(values.rulesets)}
    >
      {({values, setFieldValue, setValues}) => (
        <Form className="flex justify-center">
          <FieldArray name="rulesets">
            {(/*{push, remove}*/) => (
              <div className="relative mb-20">
                <Heading data={props.data}
                />
                {values.rulesets.map((ruleset: any, index: number) => {
                  //console.log(formConfig);
                  return (
                    <div key={index}>
                      <Ruleset
                        removeRuleset={() => {
                          HandleRemoveRuleset(values, setValues, index)
                        }}
                        rulesetIndex={index}
                        rulesetPriority={ruleset.priority}
                        rulesetID={ruleset.ruleSetId}
                        rules={ruleset.rules}
                        rulesString={`rulesets[${index}].rules`}
                        offerCode={`rulesets[${index}].offerCode`}
                        note={`rulesets[${index}].note`}
                        bookingFeeAbsolute={`rulesets[${index}].bookingFeeAbsolute`}
                        bookingFeePercent={`rulesets[${index}].bookingFeePercent`}
                        insideCommission={`rulesets[${index}].insideCommissionRate`}
                        priceSelling={`rulesets[${index}].priceSelling`}
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
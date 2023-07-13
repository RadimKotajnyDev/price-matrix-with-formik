import {FieldArray, Form, Formik} from 'formik';
import {resolveRulesets} from "../../API.tsx";
import Ruleset from "../Ruleset/Ruleset.tsx";
import {Heading} from "./Heading.tsx";
import {HandleRemoveRuleset, AddRuleset} from "./RenderFunctions.ts";

const formConfig = await resolveRulesets()

export default function RenderingForm(props: any) {

  //console.log(formConfig)
  return (
    <Formik initialValues={{rulesets: formConfig}}
            onSubmit={(values) => console.log(values)}
    >
      {({values, setFieldValue, setValues}) => (
        <Form className="flex justify-center">
          <FieldArray name="rulesets">
            {(/*{push, remove}*/) => (
              <div className="relative">
                <Heading data={props.data}
                         buttonOnClick={() => AddRuleset(values, setValues)}
                />
                {values.rulesets.map((ruleset: any, index: number) => {
                  //console.log(formConfig);
                  return (
                    <div key={index}>
                      <Ruleset
                        removeRuleset={() => {HandleRemoveRuleset(values, setValues, index)}}
                        rulesetIndex={index}
                        rulesetPriority={ruleset.priority}
                        rulesetID={ruleset.ruleSetId}
                        rules={ruleset.rules}
                        rulesString={`rulesets[${index}].rules`}
                        offerCode={`rulesets[${index}].offerCode`}
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
        </Form>
      )}
    </Formik>
  );
}
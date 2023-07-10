import {FieldArray, Form, Formik} from 'formik';
import {resolveRulesets} from "../API.tsx";
import Ruleset from "./Ruleset/Ruleset.tsx";
import Button from "./elements/Button.tsx";
import {Heading} from "./Heading.tsx";
import {AiOutlinePlusCircle} from "react-icons/ai";
import Rule from "./Ruleset/Rule.tsx";

const formConfig = await resolveRulesets()

export default function RenderingForm(props: any) {

  //console.log(formConfig)
  return (
    <Formik initialValues={{rulesets: formConfig}}
            onSubmit={(values) => console.log(values)}
    >
      {({values, setFieldValue}) => (
        <Form className="flex justify-center">
          <FieldArray name="rulesets">
            {({push, remove}) => (
              <div className="relative">
                <Heading dataName={props.dataName} dataID={props.dataID}
                         buttonOnClick={() => push('')}
                />
                {values.rulesets.map((ruleset: any, index: number) => {
                  //console.log(formConfig);
                  return (
                    <div key={index}>
                      <Ruleset
                        removeRuleset={() => remove(index)}
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


/*
useEffect(() => {
  setFormsConfig(
    data.ruleSets.map((item: any) => {
      return {
        ruleSetId: item.ruleSetId,
        logicalOperatorId: item.logicalOperatorId,
        priority: item.priority,
        rules: item.rules,
        priceSelling: item.priceSelling,
        bookingFeePercent: item.bookingFeePercent,
        bookingFeeAbsolute: item.bookingFeeAbsolute,
        insideCommissionRate: item.insideCommissionRate,
        note: item.note,
        offerCode: item.offerCode,
      }
    }))
}, [])

*/
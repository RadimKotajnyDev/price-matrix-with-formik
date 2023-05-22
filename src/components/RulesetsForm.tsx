import {ErrorMessage, Field, FieldArray, Form, Formik} from 'formik';
import {useEffect, useState} from "react";
import { resolveRulesets } from "../API.tsx";

const formConfig = await resolveRulesets()

export default function RulesetsForm() {

  console.log(formConfig)

  return (
    <Formik initialValues={formConfig}
            onSubmit={() => console.log("Saved.")}
    >{
      ({values}) => (
        <Form>
          <FieldArray name="rulesets"
                      render={arrayHelpers => (
                        <div>
                          {values.map((ruleset: any, index: number) => (
                            <div key={ruleset.priority}>
                              <label>priority {ruleset.priority}</label>
                              <Field name={`rulesets[${index}]`}/>
                            </div>
                          ))}
                        </div>
                      )}
          />
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
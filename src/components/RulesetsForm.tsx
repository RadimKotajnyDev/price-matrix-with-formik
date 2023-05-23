import {ErrorMessage, Field, FieldArray, Form, Formik} from 'formik';
import {useEffect, useState} from "react";
import {resolveRulesets} from "../API.tsx";
import Ruleset from "./Ruleset/Ruleset.tsx";

const formConfig = await resolveRulesets()

export default function RulesetsForm() {

  console.log(formConfig)

  return (
    <Formik initialValues={{rulesets: formConfig}}
            onSubmit={(values) => console.log(values)}
    >
      {({values}) => (
        <Form className="flex justify-center">
          <FieldArray name="rulesets">
            {({ push, remove}) => (
              <div>
                {values.rulesets.map((ruleset: any, index: number) => (
                  <div key={index}>
                    <Ruleset
                      RulesetPriority={ruleset.priority}
                      RulesetID={ruleset.ruleSetId}
                      offerCode={`rulesets[${index}].offerCode`} />
                  </div>
                ))}
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
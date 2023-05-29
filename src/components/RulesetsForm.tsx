import {ErrorMessage, Field, FieldArray, Form, Formik} from 'formik';
import {useEffect, useState} from "react";
import {resolveRulesets} from "../API.tsx";
import Ruleset from "./Ruleset/Ruleset.tsx";
import Button from "./elements/Button.tsx";
import {AddRulesetClass, ButtonClass, InputClass, LabelClass} from "../configs/classNames/ClassNames.tsx";
import {Heading} from "./Heading.tsx";
import {AiOutlineMinus, AiOutlinePlusCircle} from "react-icons/ai";
import RulesBackup from "./Ruleset/RulesBackup.tsx";
import fieldOptions from "../configs/options/FieldOptionsConfig.tsx";
import OperatorOptionsConfig from "../configs/options/OperatorOptionsConfig.tsx";
import FieldOptionsConfig from "../configs/options/FieldOptionsConfig.tsx";
import operatorOptions from "../configs/options/OperatorOptionsConfig.tsx";
import Rules from "./Ruleset/Rules.tsx";

const formConfig = await resolveRulesets()

export default function RulesetsForm(props: any) {

  //console.log(formConfig)
  return (
    <Formik initialValues={{rulesets: formConfig}}
            onSubmit={(values) => console.log(values)}
    >
      {({values}) => (
        <Form className="flex justify-center">
          <FieldArray name="rulesets">
            {({push, remove}) => (
              <div className="relative">
                <Heading dataName={props.dataName} dataID={props.dataID}/>
                {values.rulesets.map((ruleset: any, index: number) => {
                  //console.log(formConfig);
                  return (
                    <div key={index}>
                      <Ruleset
                        removeRuleset={() => remove(index)}
                        rulesetPriority={ruleset.priority}
                        rulesetID={ruleset.ruleSetId}
                        rulesName={ruleset}
                        offerCode={`rulesets[${index}].offerCode`}
                        bookingFeeAbsolute={`rulesets[${index}].bookingFeeAbsolute`}
                        bookingFeePercent={`rulesets[${index}].bookingFeePercent`}
                        insideCommission={`rulesets[${index}].insideCommissionRate`}
                        priceSelling={`rulesets[${index}].priceSelling`}
                      >
                        {/* RulesBackup */}
                        <FieldArray name={`rulesets.rules`}>
                          {({push: pushRule, remove: removeRule}) => (
                            <div>
                              {ruleset.rules.map((rule: any, ruleIndex: number) => (
                                <Rules key={ruleIndex}
                                       fieldName={`rulesets[${index}].rules[${ruleIndex}].fieldId`}
                                       optionName={`rulesets[${index}].rules[${ruleIndex}].compareOperatorId`}
                                       valueName={`rulesets[${index}].rules[${ruleIndex}].valueInt`}
                                       remove={() => removeRule(ruleIndex)}
                                />
                              ))}
                            </div>
                          )}
                        </FieldArray>
                      </Ruleset>
                    </div>
                  )
                })}
                <div className="flex justify-center w-full">
                  <div className="flex flex-col gap-6 w-fit">
                    <Button
                      classNameProp={ButtonClass + AddRulesetClass + " flex flex-row items-center"}
                      onClickProp={() => push('')}><AiOutlinePlusCircle size={20} className="mr-2"/> Add
                      ruleset</Button>
                    <Button typeProp="submit"
                            classNameProp={ButtonClass + " bg-teal-500"}>Submit</Button>
                  </div>
                </div>
              </div>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  )
    ;
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
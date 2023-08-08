import {Field, FormikValues} from "formik";
import fieldOptions from "../../../../configs/options/FieldOptionsOptions.tsx";
import {ArrowOnSelect} from "../../../elements/ArrowOnSelect.tsx";
import {RemoveRule} from "./functions/RuleFunctions.ts"
import {MapOperators} from "./functions/MapFunctions.tsx";
import ValueComponent from "./elements/ValueComponent.tsx";
import * as React from "react";
import {ChangeEvent} from "react";
import type {RuleType} from "../functions/RuleSetTypes.ts"
import {RemoveRuleButton} from "./elements/RemoveRuleButton.tsx";

type FormikErrors<Values> = { [K in keyof Values]?: string };

interface RuleProps {
  values: FormikValues,
  setValues: (values: React.SetStateAction<any>, shouldValidate?: boolean) => void,
  setFieldValue: any,
  fieldName: string,
  optionName: string,
  valueName: string,
  value: string | null,
  ruleSetIndex: number,
  ruleIndex: number,
  rule: RuleType,
  errors: any | FormikErrors<{ ruleSets: object[]; }>
}

export default function Rule(props: RuleProps) {

  return (
    <>
      <div className="flex flex-row mb-3">
        <div className="flex flex-row relative">
          <Field component="select" className={`InputClass w-[17.7rem]
           ${props.errors
          && props.errors?.ruleSets
          && props.errors?.ruleSets[props.ruleSetIndex]
          && props.errors?.ruleSets[props.ruleSetIndex].rules
          && props.errors?.ruleSets[props.ruleSetIndex].rules[props.ruleIndex]
          && props.errors?.ruleSets[props.ruleSetIndex].rules[props.ruleIndex].fieldId ? "border-red-400 text-red-600 bg-red-100" : ""}`}
                 required={true}
                 onChange={(e: ChangeEvent<HTMLInputElement>) => {
                   props.setFieldValue(props.fieldName, parseInt(e.target.value));
                   props.setFieldValue(props.optionName, 0); //fixed compareOperatorId value when changing field
                   props.setFieldValue(props.valueName, "")
                 }}
                 name={props.fieldName} value={props.rule.fieldId}>
            {fieldOptions.map((current) => (
              <option key={current.id} value={current.id}>{current.name}</option>
            ))}
          </Field>
          <ArrowOnSelect/>
        </div>
        <div className="flex flex-row relative">
          <Field component="select" className={`InputClass w-[17.7rem]
           ${props.errors
          && props.errors?.ruleSets
          && props.errors?.ruleSets[props.ruleSetIndex]
          && props.errors?.ruleSets[props.ruleSetIndex].rules
          && props.errors?.ruleSets[props.ruleSetIndex].rules[props.ruleIndex]
          && props.errors?.ruleSets[props.ruleSetIndex].rules[props.ruleIndex].compareOperatorId ? "border-red-400 text-red-600 bg-red-100" : ""}`}
                 required={true}
                 onChange={(e: ChangeEvent<HTMLInputElement>) => props.setFieldValue(props.optionName, parseInt(e.target.value))}
                 name={props.optionName} value={props.rule.compareOperatorId}>
            {
              MapOperators(props.rule.fieldId)
            }
          </Field>
          <ArrowOnSelect />
        </div>
        <ValueComponent rule={props.rule}
                        valueName={props.valueName}
                        value={props.value}
                        errorExists={
                          props.errors
                          && props.errors?.ruleSets
                          && props.errors?.ruleSets[props.ruleSetIndex]
                          && props.errors?.ruleSets[props.ruleSetIndex].rules
                          && props.errors?.ruleSets[props.ruleSetIndex].rules[props.ruleIndex]
                          && props.errors?.ruleSets[props.ruleSetIndex].rules[props.ruleIndex].value
                        }
                        setFieldValue={props.setFieldValue}
        />
        <RemoveRuleButton onRemoveRuleButtonClick={() => RemoveRule(props.values, props.setValues, props.ruleSetIndex, props.ruleIndex)} />
      </div>
    </>
  )
}
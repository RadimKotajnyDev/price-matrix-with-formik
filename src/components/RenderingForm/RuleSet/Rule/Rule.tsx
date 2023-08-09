import {Field} from "formik";
import fieldOptions from "../../../../configs/options/FieldOptionsOptions.tsx";
import {ArrowOnSelect} from "../../../elements/ArrowOnSelect.tsx";
import {RemoveRule} from "./functions/RuleFunctions.ts"
import {MapOperators} from "./functions/MapFunctions.tsx";
import ValueComponent from "./elements/ValueComponent.tsx";
import {ChangeEvent} from "react";
import {RemoveRuleButton} from "./elements/RemoveRuleButton.tsx";
import {RulePropsInterface} from "../../../../configs/interface/RulePropsInterface.ts";

export default function Rule(props: RulePropsInterface) {

  const {
    errors,
    ruleSetIndex,
    ruleIndex,
    setFieldValue,
    fieldName,
    optionName,
    valueName,
    rule,
    value,
    values,
    setValues
  } = props

  return (
    <>
      <div className="flex flex-row mb-3">
        <div className="flex flex-row relative">
          <Field component="select" className={`InputClass w-[17.7rem]
           ${errors
          && errors?.ruleSets
          && errors?.ruleSets[ruleSetIndex]
          && errors?.ruleSets[ruleSetIndex].rules
          && errors?.ruleSets[ruleSetIndex].rules[ruleIndex]
          && errors?.ruleSets[ruleSetIndex].rules[ruleIndex].fieldId ? "border-red-400 text-red-600 bg-red-100" : ""}`}
                 required={true}
                 onChange={(e: ChangeEvent<HTMLInputElement>) => {
                   if (fieldName != null) {
                     setFieldValue(fieldName, parseInt(e.target.value));
                   }
                   if (optionName != null) {
                     setFieldValue(optionName, 0);
                   } //fixed compareOperatorId value when changing field
                   setFieldValue(valueName, "")
                 }}
                 name={fieldName} value={rule.fieldId}>
            {fieldOptions.map((current) => (
              <option key={current.id} value={current.id}>{current.name}</option>
            ))}
          </Field>
          <ArrowOnSelect/>
        </div>
        <div className="flex flex-row relative">
          <Field component="select" className={`InputClass w-[17.7rem]
           ${errors
          && errors?.ruleSets
          && errors?.ruleSets[ruleSetIndex]
          && errors?.ruleSets[ruleSetIndex].rules
          && errors?.ruleSets[ruleSetIndex].rules[ruleIndex]
          && errors?.ruleSets[ruleSetIndex].rules[ruleIndex].compareOperatorId ? "border-red-400 text-red-600 bg-red-100" : ""}`}
                 required={true}
                 onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue(optionName, parseInt(e.target.value))}
                 name={optionName} value={rule.compareOperatorId}>
            {
              MapOperators(rule.fieldId)
            }
          </Field>
          <ArrowOnSelect />
        </div>
        <ValueComponent rule={rule}
                        valueName={valueName}
                        value={value}
                        errorExists={
                          errors
                          && errors?.ruleSets
                          && errors?.ruleSets[ruleSetIndex]
                          && errors?.ruleSets[ruleSetIndex].rules
                          && errors?.ruleSets[ruleSetIndex].rules[ruleIndex]
                          && errors?.ruleSets[ruleSetIndex].rules[ruleIndex].value
                        }
                        setFieldValue={setFieldValue}
        />
        <RemoveRuleButton onRemoveRuleButtonClick={() => RemoveRule(values, setValues, ruleSetIndex, ruleIndex)} />
      </div>
    </>
  )
}
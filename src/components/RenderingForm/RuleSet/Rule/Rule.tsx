import {Field} from "formik";
import fieldOptions from "../../../../configs/options/FieldOptionsOptions.tsx";
import {ArrowOnSelect} from "../../../elements/ArrowOnSelect.tsx";
import {RemoveRule} from "./functions/RuleFunctions.ts"
import {MapOperators} from "./functions/MapFunctions.tsx";
import ValueComponent from "./elements/ValueComponent.tsx";
import {ChangeEvent} from "react";
import {RemoveRuleButton} from "./elements/RemoveRuleButton.tsx";
import {RulePropsInterface} from "../../../../configs/interface/RulePropsInterface.ts";
import {useErrorStyles} from "../../../../hooks/useRuleErrors.ts";
/*

function FieldIdErrorsExists() {
    if(errors
      && errors?.ruleSets
      && errors?.ruleSets[ruleSetIndex]
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).rules
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).rules[ruleIndex]
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).rules[ruleIndex].fieldId) {
      return "border-red-400 text-red-600 bg-red-100"
    }
    return ""
  }

  function CompareOperatorErrorExists() {
    if(errors
      && errors?.ruleSets
      && errors?.ruleSets[ruleSetIndex]
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).rules
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).rules[ruleIndex]
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).rules[ruleIndex].compareOperatorId) {
      return "border-red-400 text-red-600 bg-red-100"
    }
    return ""
  }

  function ValueErrorExists() {
    return !!(errors
      && errors?.ruleSets
      && errors?.ruleSets[ruleSetIndex]
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).rules
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).rules[ruleIndex]
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).rules[ruleIndex].value);
  }


 */

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

  const {
    fieldIdErrorStyles, compareOperatorIdErrorStyles, valueErrorExists
  } = useErrorStyles(errors, ruleSetIndex, ruleIndex)

  return (
    <>
      <div className="flex flex-row mb-3">
        <div className="flex flex-row relative">
          <Field component="select" className={`InputClass w-[17.7rem] ${fieldIdErrorStyles}`}
                 required={true}
                 onChange={(e: ChangeEvent<HTMLInputElement>) => {
                   setFieldValue(fieldName, parseInt(e.target.value));
                   setFieldValue(optionName, 0);
                   //fixed compareOperatorId value when changing field
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
          <Field component="select" className={`InputClass w-[17.7rem] ${compareOperatorIdErrorStyles}`}
                 required={true}
                 onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue(optionName, parseInt(e.target.value))}
                 name={optionName} value={rule.compareOperatorId}>
            {
              MapOperators(rule.fieldId)
            }
          </Field>
          <ArrowOnSelect/>
        </div>
        <ValueComponent rule={rule}
                        valueName={valueName}
                        value={value}
                        errorExists={valueErrorExists}
                        setFieldValue={setFieldValue}
        />
        <RemoveRuleButton onRemoveRuleButtonClick={() => RemoveRule(values, setValues, ruleSetIndex, ruleIndex)}/>
      </div>
    </>
  )
}
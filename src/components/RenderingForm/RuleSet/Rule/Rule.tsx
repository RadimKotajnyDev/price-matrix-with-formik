import {Field} from "formik";
import fieldOptions from "../../../../configs/options/FieldOptionsConfig.tsx";
import {AiOutlineMinus} from "react-icons/ai";
import {ArrowOnSelect} from "../../../elements/ArrowOnSelect.tsx";
import {RemoveRule} from "./functions/RuleFunctions.ts"
import {MapOperators} from "./functions/MapFunctions.tsx";
import ValueComponent from "./elements/ValueComponent.tsx";
import {ChangeEvent} from "react";
import type {RuleType} from "../RuleSet.tsx"

type FormikErrors<Values> = { [K in keyof Values]?: string };
interface RuleProps {
  values: { ruleSets: object[]; },
  setValues: () => void
  setFieldValue: (field: string | number | undefined, value: string | number, shouldValidate?: boolean | undefined) => void,
  fieldName: string,
  optionName: string,
  valueName: string,
  value: string | null,
  ruleSetIndex: number,
  ruleIndex: number,
  rule: RuleType,
  errors: any | FormikErrors<{  ruleSets: object[]; }>
}

export default function Rule(props: RuleProps) {
  return (
    <>
      <div className="flex flex-row mb-3">
        <div className="flex flex-row relative">
          <Field component="select" className={`InputClass w-[18rem] ${props.rule.fieldId ? "" : "border-red-400"}`}
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
          <Field component="select" className={`InputClass w-[18rem] ${props.rule.compareOperatorId ? "" : "border-red-400"}`}
                 required={true}
                 onChange={(e: ChangeEvent<HTMLInputElement>) => props.setFieldValue(props.optionName, parseInt(e.target.value))}
                 name={props.optionName} value={props.rule.compareOperatorId}>
            {
              MapOperators(props.rule.fieldId)
            }
          </Field>
          <ArrowOnSelect/>
        </div>
        <ValueComponent rule={props.rule}
                        valueName={props.valueName}
                        value={props.value}
                        setFieldValue={props.setFieldValue}
        />
        <button type="button" onClick={() => RemoveRule(props.values, props.setValues, props.ruleSetIndex, props.ruleIndex)}>
          <AiOutlineMinus
            size={35}
            className="ml-2 rounded text-white bg-slate-800 duration-200
                       hover:text-slate-900 hover:bg-white disabled:cursor-not-allowed"
          />
        </button>
      </div>
    </>
  )
}
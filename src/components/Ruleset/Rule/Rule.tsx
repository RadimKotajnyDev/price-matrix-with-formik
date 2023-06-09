import {Field} from "formik";
import fieldOptions from "../../../configs/options/FieldOptionsConfig.tsx";
import {AiOutlineMinus} from "react-icons/ai";
import {ArrowOnSelect} from "../../elements/ArrowOnSelect.tsx";
import {RemoveRule} from "./RuleFunctions.ts"
import {MapOperators, SelectStoreValue} from "./MapFunctions.tsx";
import ValueComponent from "./ValueComponent.tsx";
import {ChangeEvent} from "react";
import type {RuleType} from "../Ruleset.tsx"

interface RuleProps {
  values: { rulesets: object[]; },
  setValues: () => void
  setFieldValue: any,
  fieldName: string,
  optionName: string,
  valueIntName: number,
  valueDecimalName: number,
  valueStringName: string,
  valueDateTimeName: string,
  rulesetIndex: number,
  ruleIndex: number,
  rule: RuleType,
}

export default function Rule(props: RuleProps) {
  return (
    <>
      <div className="flex flex-row mb-3">
        <div className="flex flex-row relative">
          <Field component="select" className="InputClass w-[15rem]"
                 onChange={(e: ChangeEvent<HTMLInputElement>) => {
                   props.setFieldValue(props.fieldName, parseInt(e.target.value));
                   props.setFieldValue(props.optionName, 0); //fixed compareOperatorId value when changing field
                   SelectStoreValue(parseInt(e.target.value),
                     props.setFieldValue, props.valueIntName,
                     props.valueDecimalName, props.valueDateTimeName,
                     props.valueStringName
                   );
                 }}
                 name={props.fieldName} value={props.rule.fieldId}>
            {fieldOptions.map((current) => (
              <option key={current.id} value={current.id}>{current.name}</option>
            ))}
          </Field>
          <ArrowOnSelect/>
        </div>
        <div className="flex flex-row relative">
          <Field component="select" className="InputClass w-[15rem]"
                 onChange={(e: ChangeEvent<HTMLInputElement>) => props.setFieldValue(props.optionName, parseInt(e.target.value))}
                 name={props.optionName} value={props.rule.compareOperatorId}>
            {
              MapOperators(props.rule.fieldId)
            }
          </Field>
          <ArrowOnSelect/>
        </div>
        <ValueComponent rule={props.rule}
                        valueIntName={props.valueIntName}
                        valueDateTimeName={props.valueDateTimeName}
                        valueStringName={props.valueStringName}
                        valueDecimalName={props.valueDecimalName}
                        setFieldValue={props.setFieldValue}
        />
        <button type="button" onClick={() => RemoveRule(props.values, props.setValues, props.rulesetIndex, props.ruleIndex)}>
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
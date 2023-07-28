import {Field} from "formik";
import {MapValueType} from "./MapFunctions.tsx";
import DaysOfWeekConfig from "../../../../configs/options/DaysOfWeekConfig.tsx";
import {ArrowOnSelect} from "../../../elements/ArrowOnSelect.tsx";
import type {RuleType} from "../RuleSet.tsx";
import {ChangeEvent} from "react";

interface valueProps {
  setFieldValue: (field: string | number | undefined, value: number | string, shouldValidate?: boolean) => void,
  rule: RuleType
  valueName: string,
  value: string | null
}

export default function ValueComponent(props: valueProps) {
  const disabledBool = props.rule.fieldId === 0
  return (
    <div className="flex flex-row relative">
      {props.rule.fieldId === 3 ?
        <>
          <Field className="InputClass w-[15rem]"
                 component="select"
                 disabled={disabledBool}
                 onChange={(e: ChangeEvent<HTMLInputElement>) => props.setFieldValue(
                   props.valueName, e.target.value)
                 }
                 name={props.valueName}
                 value={props.value}
                 type={MapValueType(props.rule.fieldId)}
          >
            {
              DaysOfWeekConfig.map((current) => (
                <option key={current.id} value={current.id}>{current.name}</option>
              ))
            }
          </Field>
          <ArrowOnSelect/>
        </>
        :
        <Field className="InputClass w-[15rem]"
               component="input"
               disabled={props.rule.fieldId === 0}
               onChange={(e: ChangeEvent<HTMLInputElement>) => props.setFieldValue(props.valueName, e.target.value)} // parseInt(e.target.value)
               name={props.valueName}
               value={props.value}
               type={MapValueType(props.rule.fieldId)}
        ></Field>
      }
    </div>
  )
}
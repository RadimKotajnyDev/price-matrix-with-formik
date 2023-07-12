import {Field} from "formik";
import fieldOptions from "../../../configs/options/FieldOptionsConfig.tsx";
import Button from "../../elements/Button.tsx";
import {AiOutlineMinus} from "react-icons/ai";
import {ArrowOnSelect} from "../../elements/ArrowOnSelect.tsx";
import {RemoveRule} from "./RuleFunctions.ts"
import {MapOperators} from "./MapOperators.tsx";

export default function Rule(props: any) {
  return (
    <>
      <div className="flex flex-row my-3">
        <div className="flex flex-row relative">
          <Field component="select" className="InputClass w-[15rem]"
                 onChange={(e: any) => {
                   props.setFieldValue(props.fieldName, parseInt(e.target.value));
                   props.setFieldValue(props.optionName, 0)
                 }}
                 name={props.fieldName} value={props.rule.fieldId}>
            {fieldOptions.map((current) => (
              <option key={current.id} value={current.id}>{current.name}</option>
            ))}
          </Field>
          <ArrowOnSelect />
        </div>
        <div className="flex flex-row relative">
          <Field component="select" className="InputClass w-[15rem]"
                 onChange={(e: any) => props.setFieldValue(props.optionName, parseInt(e.target.value))}
                 name={props.optionName}>
            {
              MapOperators(props.rule.fieldId)
            }
          </Field>
          <ArrowOnSelect />
        </div>
        <div className="flex flex-row">
          <Field className="InputClass w-[15rem]"
                 //TODO: parse int only if input = int
                 onChange={(e: any) => props.setFieldValue(props.valueName, parseInt(e.target.value))}
                 name={props.valueName} value={props.rule.valueInt} />
        </div>
        <Button onClickProp={() => RemoveRule(props.values, props.setValues, props.rulesetIndex, props.ruleIndex)}>
          <AiOutlineMinus
            size="50"
            className="ml-2 rounded text-white bg-slate-800 duration-200
                       hover:text-slate-900 hover:bg-white disabled:cursor-not-allowed"

          />
        </Button>
      </div>
    </>
  )
}
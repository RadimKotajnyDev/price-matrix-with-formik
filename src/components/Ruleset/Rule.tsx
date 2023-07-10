import {FastField, Field} from "formik";
import fieldOptions from "../../configs/options/FieldOptionsConfig.tsx";
import operatorOptions from "../../configs/options/OperatorOptionsConfig.tsx";
import Button from "../elements/Button.tsx";
import {AiOutlineMinus} from "react-icons/ai";
import {ArrowOnSelect} from "../elements/ArrowOnSelect.tsx";

export default function Rule(props: any) {
  return (
    <div key={props.keyProp}>
      <div className="flex flex-row my-3">
        <div className="flex flex-row relative">
          <Field component="select" className="InputClass"
                 onChange={(e: any) => props.setFieldValue(props.fieldName, parseInt(e.target.value))}
                 name={props.fieldName}>
            {fieldOptions.map((current) => (
              <option key={current.id} value={current.id}>{current.name}</option>
            ))}
          </Field>
          <ArrowOnSelect />
        </div>
        <div className="flex flex-row relative">
          <Field component="select" className="InputClass"
                 onChange={(e: any) => props.setFieldValue(props.optionName, parseInt(e.target.value))}
                 name={props.optionName}>
            {operatorOptions.map((current) => (
              <option key={current.id} value={current.id}>{current.name}</option>
            ))}
          </Field>
          <ArrowOnSelect />
        </div>
        <div className="flex flex-row">
          <Field className="InputClass"
                 //TODO: parse int only if input = int
                 onChange={(e: any) => props.setFieldValue(props.valueName, parseInt(e.target.value))}
                 name={props.valueName}/>
        </div>
        <Button onClickProp={props.remove}>
          <AiOutlineMinus
            size="50"
            className="ml-2 rounded text-white bg-slate-700 duration-200
                       hover:text-slate-900 hover:bg-white disabled:cursor-not-allowed"

          />
        </Button>
      </div>
    </div>
  )
}
import {Field} from "formik";
import fieldOptions from "../../configs/options/FieldOptionsConfig.tsx";
import operatorOptions from "../../configs/options/OperatorOptionsConfig.tsx";
import Button from "../elements/Button.tsx";
import {AiOutlineMinus} from "react-icons/ai";

export default function Rule(props: any) {
  return (
    <div key={props.keyProp}>
      <div className="flex flex-row items-center my-3">
        <div className="flex flex-row relative">
          <Field component="select" className="InputClass"
                 onChange={(e: any) => props.setFieldValue(props.fieldName, parseInt(e.target.value))}
                 name={props.fieldName}>
            {fieldOptions.map((current) => (
              <option key={current.id} value={current.id}>{current.name}</option>
            ))}
          </Field>
          <div className="pointer-events-none absolute z-30 inset-y-0 right-0 flex items-center px-5 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20">
              <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
        <div className="flex flex-row relative">
          <Field component="select" className="InputClass"
                 onChange={(e: any) => props.setFieldValue(props.optionName, parseInt(e.target.value))}
                 name={props.optionName}>
            {operatorOptions.map((current) => (
              <option key={current.id} value={current.id}>{current.name}</option>
            ))}
          </Field>
          <div className="pointer-events-none absolute z-30 inset-y-0 right-0 flex items-center px-5 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20">
              <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
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
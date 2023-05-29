import {InputClass, LabelClass} from "../../configs/classNames/ClassNames.tsx";
import {Field} from "formik";
import fieldOptions from "../../configs/options/FieldOptionsConfig.tsx";
import operatorOptions from "../../configs/options/OperatorOptionsConfig.tsx";
import Button from "../elements/Button.tsx";
import {AiOutlineMinus} from "react-icons/ai";

export default function Rules(props: any) {
  return (
    <div key={props.keyProp}>
      <div className="flex flex-row items-center">
        <div className="flex flex-col">
          <label className={LabelClass}>Field</label>
          <Field component="select" className={InputClass + " z-0 relative"}
                 name={props.fieldName}>
            {fieldOptions.map((current) => (
              <option key={current.id} value={current.id}>{current.name}</option>
            ))}
          </Field>
        </div>
        <div className="flex flex-col">
          <label className={LabelClass}>Operator</label>
          <Field component="select" className={InputClass}
                 name={props.optionName}>
            {operatorOptions.map((current) => (
              <option key={current.id} value={current.id}>{current.name}</option>
            ))}
          </Field>
        </div>
        <div className="flex flex-col">
          <label className={LabelClass}>Value</label>
          <Field className={InputClass}
                 name={props.valueName}/>
        </div>
        <Button onClickProp={props.remove} classNameProp="flex">
          <AiOutlineMinus
            size="50"
            className="ml-2 rounded text-white bg-slate-900 duration-200
                                                     hover:text-slate-900 hover:bg-white disabled:cursor-not-allowed"

          />
        </Button>
      </div>
    </div>
  )
}
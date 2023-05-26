import {Field, FieldArray} from "formik";
import Button from "../elements/Button.tsx";

export default function Rules({nameProp, rulesArray, fieldName, operatorName, valueName,}: any) {
  // add interface for props
  return (
    <FieldArray name={nameProp.rules}>
      {({push, remove}) => (
        <div>
          {rulesArray.map((rulesArrayItem: any, ruleIndex: number) => (
            <div key={ruleIndex} className="flex flex-row">
              <div className="flex flex-col">
                <label>Field</label>
                <Field as="select" name={fieldName}/>
              </div>
              <div className="flex flex-col">
                <label>Operator</label>
                <Field as="select" name={operatorName}/>
              </div>
              <div className="flex flex-col">
                <label>Value</label>
                <Field name={valueName}/>
              </div>
              <Button onClickProp={() => remove(ruleIndex)}>-</Button>
            </div>
          ))}
          <Button></Button>
        </div>
      )}
    </FieldArray>
  )
}
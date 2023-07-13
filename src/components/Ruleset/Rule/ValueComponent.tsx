import {Field} from "formik";
import {MapValueStoreType, MapValueType, StoreInteger} from "./MapFunctions.tsx";
import DaysOfWeekConfig from "../../../configs/options/DaysOfWeekConfig.tsx";
import {ArrowOnSelect} from "../../elements/ArrowOnSelect.tsx";

export default function ValueComponent(props: any) {
  return (
    <div className="flex flex-row relative">
      {props.rule.fieldId === 3 ?
        <>
          <Field className="InputClass w-[15rem]"
                 component="select"
                 disabled={props.rule.fieldId === 0}
                 onChange={(e: any) => props.setFieldValue(
                   MapValueStoreType(props.rule.fieldId, props.valueIntName,
                     props.valueDecimalName, props.valueDateTimeName, props.valueStringName), parseInt(e.target.value))
          }
                 name={MapValueStoreType(props.rule.fieldId, props.valueIntName,
                   props.valueDecimalName, props.valueDateTimeName, props.valueStringName)}
                 value={MapValueStoreType(props.rule.fieldId, props.rule.valueInt,
                   props.rule.valueDecimal, props.rule.valueDateTime, props.rule.valueString)}
                 type={MapValueType(props.rule.fieldId)}
          >
            {
              DaysOfWeekConfig.map((current) => (
                <option key={current.id} value={current.id}>{current.name}</option>
              ))
            }
          </Field>
          <ArrowOnSelect />
        </>
        :
        <Field className="InputClass w-[15rem]"
               component="input"
               disabled={props.rule.fieldId === 0}
               onChange={(e: any) => props.setFieldValue(
                 MapValueStoreType(props.rule.fieldId, props.valueIntName,
                   props.valueDecimalName, props.valueDateTimeName, props.valueStringName),
                 StoreInteger(props.rule.fieldId, e.target.value))} // parseInt(e.target.value)
               name={MapValueStoreType(props.rule.fieldId, props.valueIntName,
                 props.valueDecimalName, props.valueDateTimeName, props.valueStringName)}
               value={MapValueStoreType(props.rule.fieldId, props.rule.valueInt,
                 props.rule.valueDecimal, props.rule.valueDateTime, props.rule.valueString)}
               type={MapValueType(props.rule.fieldId)}
        ></Field>
      }
    </div>
  )
}
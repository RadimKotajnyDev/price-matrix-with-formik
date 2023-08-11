import {Field, FormikHelpers} from "formik";
import {MapValueType} from "../functions/MapFunctions.tsx";
import DaysOfWeekConfig from "../../../../../configs/options/DaysOfWeekOptions.tsx";
import {ArrowOnSelect} from "../../../../elements/ArrowOnSelect.tsx";
import {ChangeEvent} from "react";
import PerformanceDateOptions from "../../../../../configs/options/PerformanceDateOptions.tsx";
import {PriceMatrixInterface, RulesType} from "../../../../../configs/interface/PriceMatrixInterface.ts";

interface valueProps {
  setFieldValue: FormikHelpers<PriceMatrixInterface>['setFieldValue'],
  rule: RulesType
  valueName: string,
  value: string | null,
  errorExists: boolean
}

const ValidateDays = (value: string | null) => {
  let error;
  if (!value || value === '0') {
    error = 'This field cannot be empty.';
  }
  return error;
};

export const ValueComponent = (props: valueProps) => {

  const {
    rule,
    valueName,
    value,
    errorExists,
    setFieldValue
  } = props

  const disabledBool = rule.fieldId === 0

  return (
    <div className="flex flex-row relative">
      {
        rule.fieldId !== 3 && rule.fieldId !== 1 ?
          <Field className={`InputClass w-[17.7rem] ${errorExists ? "border-red-400 text-red-600 bg-red-100" : ""}`}
                 component="input"
                 disabled={disabledBool}
                 onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue(valueName, e.target.value)} // parseInt(e.target.value)
                 name={valueName}
                 value={value}
                 type={MapValueType(rule.fieldId)}
          ></Field>
          : null
      }
      {
        rule.fieldId === 1 ?
          <>
            <Field
              className={`InputClass w-[17.7rem] ${errorExists ? "border-red-400 text-red-600 bg-red-100" : ""}`}
              component="select"
              disabled={disabledBool}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue(
                valueName, e.target.value)
              }
              name={valueName}
              value={value}
              type={MapValueType(rule.fieldId)}
              size={1}
            >
              {
                PerformanceDateOptions.map((current: {name: string, value: string, id: number}) => (
                  <option key={current.id} value={current.value}>{current.name}</option>
                ))
              }
            </Field>
            <ArrowOnSelect/>
          </> : null
      }
      {rule.fieldId === 3 ?
        <>
          <Field
            validate={() => ValidateDays(value)}
            className={`InputClass w-[17.7rem] ${errorExists ? "border-red-400 text-red-600 bg-red-100" : ""}`}
            component="select"
            disabled={disabledBool}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue(
              valueName, e.target.value)
            }
            name={valueName}
            value={value}
            type={MapValueType(rule.fieldId)}
          >
            {
              DaysOfWeekConfig.map((current: { name: string, id: number }) => (
                <option key={current.id} value={current.id}>{current.name}</option>
              ))
            }
          </Field>
          <ArrowOnSelect/>
        </>
        : null
      }
    </div>
  )
}
import {Field, FieldArray} from "formik";
import {ExclusionDatesInterface} from "../../../../configs/interface/PriceMatrixInterface.ts";
import {AddExclusionDateRow, RemoveExclusionDateRow} from "./ExclusionDatesFunctions.ts";
import {RuleSetPropsInterface} from "../../../../configs/interface/RuleSetPropsInterface.ts";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"

interface ExclusionDatesProps {
  exclusionDates: any,
  ruleSetIndex: number,
  values: RuleSetPropsInterface['values']
  setValues: RuleSetPropsInterface['setValues']

  map?(element: (exclusionDate: ExclusionDatesInterface, index: number) => JSX.Element): any;
}

export const ExclusionDates = (props: ExclusionDatesProps) => {

  const {
    setValues,
    values,
    exclusionDates,
    ruleSetIndex
  } = props

  return (
    <FieldArray name={`ruleSets.exclusionDates`}>
      {() => (
        <div className="w-fit">
          <div className="w-fit mb-3">
            <div className="flex flex-row">
              <p className="border w-[140px] text-center">Time/(Eve/Mat)</p>
              <p className="border w-[140px] text-center">Date from</p>
              <p className="border w-[140px] text-center">Date to</p>
            </div>
            {exclusionDates?.map((exclusionDate: ExclusionDatesInterface, edIndex: number) => (
              <div key={exclusionDate.id} className="flex flex-row justify-between">
                <Field name={`ruleSets[${ruleSetIndex}].exclusionDates[${edIndex}].time`}
                       className="border text-center w-[140px]"/>
                <Field name={`ruleSets[${ruleSetIndex}].exclusionDates[${edIndex}].dateFrom`}
                       type="date" className="border text-center w-[140px]"/>
                <Field name={`ruleSets[${ruleSetIndex}].exclusionDates[${edIndex}].dateTo`}
                       type="date" className="border text-center w-[140px]"/>
                <button type="button" onClick={() => RemoveExclusionDateRow(values, setValues, ruleSetIndex, edIndex)}
                        className="rounded-sm text-white bg-secondary ml-2 my-1">
                  <AiOutlineMinus size={30}/>
                </button>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center">
            <button type="button" onClick={() => AddExclusionDateRow(values, setValues, ruleSetIndex)}
                    className="ButtonClass bg-secondary px-2 py-1 flex justify-center items-center w-fit">
              <AiOutlinePlus size={25}/>
              exclusion date
            </button>
          </div>
        </div>
      )}
    </FieldArray>
  )
}
import {Field} from "formik";
import {RuleSetPropsInterface} from "../../../../configs/interface/RuleSetPropsInterface.ts";
import {RuleSetInterface} from "../../../../configs/interface/PriceMatrixInterface.ts";

interface DatesInterface {
  ruleSetIndex: number,
  errors: RuleSetPropsInterface['errors'],
  performancesFrom: string | null,
  performancesTo: string | null,
  bookingsFrom: string | null,
  bookingsTo: string | null,
}

export const Dates = (props: DatesInterface) => {

  const {
    ruleSetIndex,
    errors,
    performancesFrom,
    performancesTo,
    bookingsFrom,
    bookingsTo
  } = props

  return (
    <>
      <div className="grid grid-flow-col w-[40rem] justify-between items-center gap-x-2">
        <label htmlFor={performancesFrom || undefined} className="text-secondary w-40">Performances from</label>
        <Field type="date" name={performancesFrom}
               className={`InputClass w-48 
               ${errors
               && errors?.ruleSets
               && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface)
               && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface)?.dateSelector
               && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface)?.dateSelector?.performancesRange ? "border-red-400 text-red-600 bg-red-100" : ""
               }`}
        />
        <label htmlFor={performancesTo || undefined} className="text-secondary">to:</label>
        <Field type="date" name={performancesTo}
               className={`InputClass w-48 
               ${errors
               && errors?.ruleSets
               && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface)
               && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface)?.dateSelector
               && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface)?.dateSelector?.performancesRange ? "border-red-400 text-red-600 bg-red-100" : ""
               }`}
        />
      </div>
      <div className="grid grid-flow-col w-[40rem] justify-between items-center gap-x-2">
        <label htmlFor={bookingsFrom || undefined} className="text-secondary w-40">Bookings from</label>
        <Field type="date" name={bookingsFrom}
               className={`InputClass w-48 
               ${errors
               && errors?.ruleSets
               && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface)
               && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface)?.dateSelector
               && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface)?.dateSelector?.bookingsRange ? "border-red-400 text-red-600 bg-red-100" : ""
               }`}
        />
        <label htmlFor={bookingsTo || undefined} className="text-secondary ">to:</label>
        <Field type="date" name={bookingsTo}
               className={`InputClass w-48 
               ${errors
               && errors?.ruleSets
               && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface)
               && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface)?.dateSelector
               && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface)?.dateSelector?.bookingsRange ? "border-red-400 text-red-600 bg-red-100" : ""
               }`}
        />
      </div>
    </>
  )
}
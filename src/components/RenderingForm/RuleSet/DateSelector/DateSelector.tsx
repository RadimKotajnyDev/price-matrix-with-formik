import {Dates} from "./Dates.tsx";
import {DayTimes} from "./DayTimes.tsx";
import {RuleSetPropsInterface} from "../../../../configs/interface/RuleSetPropsInterface.ts";

interface DataSelectorProps {
  ruleSetIndex: number
  errors: RuleSetPropsInterface['errors'],
  performancesFrom: string | null,
  performancesTo: string | null,
  bookingsFrom: string | null,
  bookingsTo: string | null,
  selectedPerformanceTimesName: string
}


export const DateSelector = (props: DataSelectorProps) => {

  const {
    ruleSetIndex,
    errors,
    performancesFrom,
    performancesTo,
    bookingsFrom,
    bookingsTo,
    selectedPerformanceTimesName
  } = props

  return (
    <div className="flex flex-col gap-5 w-fit">
      <Dates
        ruleSetIndex={ruleSetIndex}
        errors={errors}
        performancesFrom={performancesFrom}
        performancesTo={performancesTo}
        bookingsFrom={bookingsFrom}
        bookingsTo={bookingsTo}
      />
      <DayTimes selectedPerformanceTimesName={selectedPerformanceTimesName} />
    </div>
  )
}
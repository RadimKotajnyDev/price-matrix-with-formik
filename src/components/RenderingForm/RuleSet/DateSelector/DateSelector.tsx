import {Dates} from "./Dates.tsx";
import {DayTimes} from "./DayTimes.tsx";

interface DataSelectorProps {
  performancesFrom: string | null,
  performancesTo: string | null,
  bookingsFrom: string | null,
  bookingsTo: string | null,
  selectedPerformanceTimesName: string
}


export const DateSelector = (props: DataSelectorProps) => {

  const {
    performancesFrom,
    performancesTo,
    bookingsFrom,
    bookingsTo,
    selectedPerformanceTimesName
  } = props

  return (
    <div className="flex flex-col gap-5 w-fit">
      <Dates
        performancesFrom={performancesFrom}
        performancesTo={performancesTo}
        bookingsFrom={bookingsFrom}
        bookingsTo={bookingsTo}
      />
      <DayTimes selectedPerformanceTimesName={selectedPerformanceTimesName} />
    </div>
  )
}
import {Field} from "formik";
import {dayNames} from "../../../../configs/PerformanceTimes/DayNames.ts";

interface DataSelectorProps {
  performancesFrom: string | null,
  performancesTo: string | null,
  bookingsFrom: string | null,
  bookingsTo: string | null,
  //selectedPerformanceTimes: selectedPerformanceTime[],
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
      <div className="grid grid-flow-col w-[40rem] justify-start items-center gap-x-2">
        <label className="w-40">Performances from</label>
        <Field type="date" name={performancesFrom} className="InputClass w-48"/>
        <label>to:</label>
        <Field type="date" name={performancesTo} className="InputClass w-48"/>
      </div>
      <div className="grid grid-flow-col w-[35rem] justify-start items-center gap-x-2">
        <label className="w-40">Bookings from</label>
        <Field type="date" name={bookingsFrom} className="InputClass w-48"/>
        <label>to:</label>
        <Field type="date" name={bookingsTo} className="InputClass w-48"/>
      </div>
      <div className="grid grid-flow-col gap-x-5">
        <div className="grid grid-rows-3 gap-y-3">
          <span/>
          <label>Time (matinee)</label>
          <label>Time (evening)</label>
        </div>
        {/*
                    selectedPerformanceTimes.map((value: selectedPerformanceTime, index: number) => (
                      <div role="group" aria-labelledby="checkbox-group"
                        key={index} className="grid grid-rows-3 justify-center gap-y-3">
                          <label>{days[index]}</label>
                          <Field type="checkbox" name={selectedPerformanceTimesName} value={value} className="h-5 w-5"/>
                          <Field type="checkbox" name={selectedPerformanceTimesName} value={value} className="h-5 w-5"/>
                      </div>
                    ))
                */}
        {
          //TODO: convert string to object
          dayNames.map((current: { id: number, day: string }) => {
            return (
              <div role="group"
                   aria-labelledby="checkbox-group"
                   key={current.id} className="grid grid-rows-3 justify-center gap-y-3">
                <label>{current.day}</label>
                <Field
                  type="checkbox" name={selectedPerformanceTimesName}
                  value={JSON.stringify({ type: 0, dayOfWeek: current.id })} className="h-5 w-5"/>
                <Field type="checkbox" name={selectedPerformanceTimesName}
                       value={JSON.stringify({ type: 1, dayOfWeek: current.id })} className="h-5 w-5"/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
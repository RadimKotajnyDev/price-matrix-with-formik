import {dayNames} from "../../../../configs/PerformanceTimes/DayNames.ts";
import {Field} from "formik";

interface DayTimesInterface {
  selectedPerformanceTimesName: string
}

export const DayTimes = (props: DayTimesInterface) => {

  const {
    selectedPerformanceTimesName
  } = props

  return (
    <>
      <div className="grid grid-flow-col gap-x-5">
        <div className="grid grid-rows-3 gap-y-3 text-secondary">
          <span/>
          <label>Time (matinee)</label>
          <label>Time (evening)</label>
        </div>
        {
          dayNames.map((current: { id: number, day: string }) => {
            return (
              <div role="group"
                   aria-labelledby="checkbox-group"
                   key={current.id} className="grid grid-rows-3 justify-center gap-y-3">
                <label className="text-secondary">{current.day}</label>
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
    </>
  )
}
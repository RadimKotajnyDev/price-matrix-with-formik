import {Field} from "formik";

interface DatesInterface {
  performancesFrom: string | null,
  performancesTo: string | null,
  bookingsFrom: string | null,
  bookingsTo: string | null,
}

export const Dates = (props: DatesInterface) => {

  const {
    performancesFrom,
    performancesTo,
    bookingsFrom,
    bookingsTo
  } = props

  return (
    <>
      <div className="grid grid-flow-col w-[40rem] justify-start items-center gap-x-2">
        <label className="w-40">Performances from</label>
        <Field type="date" name={performancesFrom} className="InputClass w-48"/>
        <label>to:</label>
        <Field type="date" name={performancesTo} className="InputClass w-48"/>
      </div>
      <div className="grid grid-flow-col w-[40rem] justify-start items-center gap-x-2">
        <label className="w-40">Bookings from</label>
        <Field type="date" name={bookingsFrom} className="InputClass w-48"/>
        <label>to:</label>
        <Field type="date" name={bookingsTo} className="InputClass w-48"/>
      </div></>
  )
}
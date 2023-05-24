import {Field} from "formik";
import {InputClass} from "../../configs/classNames/ClassNames.tsx";

interface Props {
  bookingFeeAbsolute?: number | string,
  bookingFeePercent?: number | string,
  insideCommission?: number | string,
  priceSelling?: number | string,
}

const rowClass = "flex flex-row gap-5 justify-between items-center"

export default function Pricing(props: Props) {
  const {
    bookingFeeAbsolute,
    bookingFeePercent,
    insideCommission,
    priceSelling} = props

  //TODO: check if BookingFees are correctly connected

  return (
    <div className="flex flex-col">
      <p className="font-semibold">Pricing</p>
      <div className={rowClass}>
        <label>BookingFeeAbsolute</label>
        <Field className={InputClass} type="number" name={bookingFeeAbsolute} />
      </div>
      <div className={rowClass}>
        <label>BookingFeePercent</label>
        <Field className={InputClass} type="number" name={bookingFeePercent} />
      </div>
      <div className={rowClass}>
        <label>InsideCommission</label>
        <Field className={InputClass} type="number" name={insideCommission} />
      </div>
      <div className={rowClass}>
        <label>PriceSelling</label>
        <Field className={InputClass} type="number" name={priceSelling} />
      </div>
    </div>
  )
}
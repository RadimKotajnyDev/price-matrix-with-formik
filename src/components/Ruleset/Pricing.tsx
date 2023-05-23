import {Field} from "formik";
import {InputClass} from "../../configs/classNames/ClassNames.tsx";

export default function Pricing(props: any) {
  const {bookingFeeAbsolute, bookingFeePercent, insideCommission, priceSelling} = props

  //TODO: check if BookingFees are correctly connected

  return (
    <div className="flex flex-col">
      <p className="font-semibold">Pricing</p>
      <div>
        <label>BookingFeeAbsolute</label>
        <Field className={InputClass} type="number" name={bookingFeeAbsolute} />
      </div>
      <div>
        <label>BookingFeePercent</label>
        <Field className={InputClass} type="number" name={bookingFeePercent} />
      </div>
      <div>
        <label>InsideCommission</label>
        <Field className={InputClass} type="number" name={insideCommission} />
      </div>
        <label>PriceSelling</label>
      <Field className={InputClass} type="number" name={priceSelling} />
      <div>
      </div>
    </div>
  )
}
import {Field} from "formik";

export default function Pricing(props: any) {
  const {bookingFeeAbsolute, bookingFeePercent, insideCommission, priceSelling} = props

  //TODO: check if BookingFees are correctly connected

  return (
    <div className="flex flex-col">
      <p className="font-semibold">Pricing</p>
      <div>
        <label>BookingFeeAbsolute</label>
        <Field type="number" name={bookingFeeAbsolute} />
      </div>
      <div>
        <label>BookingFeePercent</label>
        <Field type="number" name={bookingFeePercent} />
      </div>
      <div>
        <label>InsideCommission</label>
        <Field type="number" name={insideCommission} />
      </div>
        <label>PriceSelling</label>
      <Field type="number" name={priceSelling} />
      <div>
      </div>
    </div>
  )
}
import {Field} from "formik";

interface Props {
  bookingFeeAbsolute?: number | string,
  bookingFeePercent?: number | string,
  insideCommission?: number | string,
  priceSelling?: number | string,
}

const rowClass = " flex flex-row justify-between items-center"
const widthClass = " w-full min-w-[100px] max-w-[120px]"
export default function Pricing(props: Props) {
  const {
    bookingFeeAbsolute,
    bookingFeePercent,
    insideCommission,
    priceSelling} = props
  return (
    <div className="flex flex-col gap-2 w-2/5">
      <p className="LabelClass">Pricing</p>
      <div className={rowClass}>
        <label className="PricingLabel">BookingFeeAbsolute (&#163;)</label>
        <Field className={"InputClass" + widthClass} type="number" name={bookingFeeAbsolute} />
      </div>
      <div className={rowClass}>
        <label className="PricingLabel">BookingFeePercent (%)</label>
        <Field className={"InputClass" + widthClass} type="number" name={bookingFeePercent} />
      </div>
      <div className={rowClass}>
        <label className="PricingLabel">InsideCommission (%)</label>
        <Field className={"InputClass" + widthClass} type="number" name={insideCommission} />
      </div>
      <div className={rowClass}>
        <label className="PricingLabel">PriceSelling (&#163;)</label>
        <Field className={"InputClass" + widthClass} type="number" name={priceSelling} />
      </div>
    </div>
  )
}
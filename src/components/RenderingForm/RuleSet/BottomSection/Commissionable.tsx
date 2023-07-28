import {Field} from "formik";

interface Props {
  bookingFeeAbsoluteValue: number | "",
  bookingFeePercentValue: number | "",
  priceSellingValue: number | "",
  bookingFeeAbsolute: string,
  bookingFeePercent: string,
  priceSelling: string,
}

const rowClass = " flex flex-row justify-between items-center"
const widthClass = " w-full min-w-[100px] max-w-[120px]"
export default function Commissionable(props: Props) {
  const {
    bookingFeePercentValue,
    priceSellingValue,
    bookingFeeAbsoluteValue,
    bookingFeeAbsolute,
    bookingFeePercent,
    priceSelling
  } = props
  return (
    <div className="flex flex-col gap-2 w-2/5">
      <p className="LabelClass">Commissionable</p>
      <div className={rowClass}>
        <label className="PricingLabel">BookingFeeAbsolute (&#163;)</label>
        <Field
          className={"InputClass" + widthClass}
          type="number"
          name={bookingFeeAbsolute}
          value={bookingFeeAbsoluteValue}
          disabled={priceSellingValue != ""}
        />
      </div>
      <div className={rowClass}>
        <label className="PricingLabel">BookingFeePercent (%)</label>
        <Field
          className={"InputClass" + widthClass}
          type="number"
          name={bookingFeePercent}
          value={bookingFeePercentValue}
          disabled={priceSellingValue != ""}
        />
      </div>
      <div className={rowClass}>
        <label className="PricingLabel">PriceSelling (&#163;)</label>
        <Field
          className={"InputClass" + widthClass}
          type="number"
          name={priceSelling}
          value={priceSellingValue}
          disabled={bookingFeeAbsoluteValue != "" || bookingFeePercentValue != ""}
        />
      </div>
    </div>
  )
}
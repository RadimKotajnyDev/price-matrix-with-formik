import {Field} from "formik";

interface Props {
  bookingFeeAbsoluteValue: number | "",
  bookingFeePercentValue: number | "",
  insideCommissionRateValue: number | "",
  priceSellingValue: number | "",
  bookingFeeAbsolute: string,
  bookingFeePercent: string,
  insideCommissionRate: string,
  priceSelling: string,
  values: any,
}

const rowClass = " flex flex-row justify-between items-center"
const widthClass = " w-full min-w-[100px] max-w-[120px]"
export default function Pricing(props: Props) {
  const {
    values,
    bookingFeePercentValue,
    insideCommissionRateValue,
    priceSellingValue,
    bookingFeeAbsoluteValue,
    bookingFeeAbsolute,
    bookingFeePercent,
    insideCommissionRate,
    priceSelling
  } = props
  return (
    <div className="flex flex-col gap-2 w-2/5">
      <p className="LabelClass">Pricing</p>
      <div className={rowClass}>
        <label className="PricingLabel">BookingFeeAbsolute (&#163;)</label>
        <Field
          className={"InputClass" + widthClass}
          type="number"
          name={bookingFeeAbsolute}
          value={bookingFeeAbsoluteValue}
          disabled={insideCommissionRateValue != "" || priceSellingValue != ""}
        />
      </div>
      <div className={rowClass}>
        <label className="PricingLabel">BookingFeePercent (%)</label>
        <Field
          className={"InputClass" + widthClass}
          type="number"
          name={bookingFeePercent}
          value={bookingFeePercentValue}
          disabled={insideCommissionRateValue != "" || priceSellingValue != ""}
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
      <div className={rowClass}>
        <label className="PricingLabel">InsideCommission (%)</label>
        <Field
          className={"InputClass" + widthClass}
          type="number"
          name={insideCommissionRate}
          value={insideCommissionRateValue}
          disabled={bookingFeeAbsoluteValue != "" || bookingFeePercentValue != ""}
        />
      </div>
    </div>
  )
}
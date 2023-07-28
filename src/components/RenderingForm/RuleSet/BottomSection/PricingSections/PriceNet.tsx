import {Field} from "formik";

interface Props {
  netBookingFeeAbsoluteValue: number | string | null,
  netBookingFeePercentValue: number | string | null,
  netPriceSellingValue: number | string | null,
  netBookingFeeAbsolute: number | string,
  netBookingFeePercent: number | string,
  netPriceSelling: number | string,
}

const rowClass = " flex flex-row justify-between items-center"
const widthClass = " w-full min-w-[100px] max-w-[120px]"
export default function PriceNet(props: Props) {
  const {
    netBookingFeePercentValue,
    netPriceSellingValue,
    netBookingFeeAbsoluteValue,
    netBookingFeeAbsolute,
    netBookingFeePercent,
    netPriceSelling
  } = props
  return (
    <div className="flex flex-col gap-2 w-2/5">
      <p className="LabelClass">Price Net</p>
      <div className={rowClass}>
        <label className="PricingLabel">BookingFeeAbsolute (&#163;)</label>
        <Field
          className={"InputClass" + widthClass}
          type="number"
          name={netBookingFeeAbsolute}
          value={netBookingFeeAbsoluteValue}
          disabled={netPriceSellingValue != ""}
        />
      </div>
      <div className={rowClass}>
        <label className="PricingLabel">BookingFeePercent (%)</label>
        <Field
          className={"InputClass" + widthClass}
          type="number"
          name={netBookingFeePercent}
          value={netBookingFeePercentValue}
          disabled={netPriceSellingValue != ""}
        />
      </div>
      <div className={rowClass}>
        <label className="PricingLabel">PriceSelling (&#163;)</label>
        <Field
          className={"InputClass" + widthClass}
          type="number"
          name={netPriceSelling}
          value={netPriceSellingValue}
          disabled={netBookingFeeAbsoluteValue != "" || netBookingFeePercentValue != ""}
        />
      </div>
    </div>
  )
}
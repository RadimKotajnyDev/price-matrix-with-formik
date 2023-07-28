import {Field} from "formik";

interface Props {
  commissionableBookingFeeAbsoluteValue: number | string | null,
  commissionableBookingFeePercentValue: number | string | null,
  commissionablePriceSellingValue: number | string | null,
  commissionableBookingFeeAbsolute: string,
  commissionableBookingFeePercent: string,
  commissionablePriceSelling: string,
}

const rowClass = " flex flex-row justify-between items-center"
const widthClass = " w-full min-w-[100px] max-w-[120px]"
export default function PriceCommissionable(props: Props) {
  const {
    commissionableBookingFeePercentValue,
    commissionablePriceSellingValue,
    commissionableBookingFeeAbsoluteValue,
    commissionableBookingFeeAbsolute,
    commissionableBookingFeePercent,
    commissionablePriceSelling
  } = props
  return (
    <div className="flex flex-col gap-2 w-2/5">
      <p className="LabelClass">Price Commissionable</p>
      <div className={rowClass}>
        <label className="PricingLabel">BookingFeeAbsolute (&#163;)</label>
        <Field
          className={"InputClass" + widthClass}
          type="number"
          pattern="/^\d+$/"
          name={commissionableBookingFeeAbsolute}
          value={commissionableBookingFeeAbsoluteValue}
          disabled={commissionablePriceSellingValue != ""}
        />
      </div>
      <div className={rowClass}>
        <label className="PricingLabel">BookingFeePercent (%)</label>
        <Field
          className={"InputClass" + widthClass}
          type="number"
          pattern="/^\d+$/"
          name={commissionableBookingFeePercent}
          value={commissionableBookingFeePercentValue}
          disabled={commissionablePriceSellingValue != ""}
          min={0}
          //max={100}
        />
      </div>
      <div className={rowClass}>
        <label className="PricingLabel">PriceSelling (&#163;)</label>
        <Field
          className={"InputClass" + widthClass}
          type="number"
          pattern="/^\d+$/"
          name={commissionablePriceSelling}
          value={commissionablePriceSellingValue}
          disabled={commissionableBookingFeeAbsoluteValue != "" || commissionableBookingFeePercentValue != ""}
        />
      </div>
    </div>
  )
}
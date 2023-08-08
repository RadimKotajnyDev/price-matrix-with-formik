import PriceNet from "./PricingSections/PriceNet.tsx";
import {Divider} from "../../../elements/Divider.tsx";
import CodeAndCommission from "./CodeAndCommission/CodeAndCommission.tsx";
import PriceCommissionable from "./PricingSections/PriceCommissionable.tsx";

interface Props {
  netBookingFeeAbsolute: string,
  netBookingFeeAbsoluteValue: number | string,
  netBookingFeePercent: string,
  netBookingFeePercentValue: number | string,
  netPriceSelling: string,
  netPriceSellingValue: number | string,
  commissionableBookingFeeAbsolute: string,
  commissionableBookingFeeAbsoluteValue: number | string,
  commissionableBookingFeePercent: string,
  commissionableBookingFeePercentValue: number | string,
  commissionablePriceSelling: string,
  commissionablePriceSellingValue: number | string,
  offerCode: string,
  insideCommissionRate: string,
  errors: any,
  ruleSetIndex: number
}

export const BottomSection = (props: Props) => {

  const {
    netBookingFeeAbsolute,
    netBookingFeeAbsoluteValue,
    netBookingFeePercent,
    netBookingFeePercentValue,
    netPriceSelling,
    netPriceSellingValue,
    commissionableBookingFeeAbsolute,
    commissionableBookingFeeAbsoluteValue,
    commissionableBookingFeePercent,
    commissionableBookingFeePercentValue,
    commissionablePriceSelling,
    commissionablePriceSellingValue,
    insideCommissionRate,
    offerCode,
    errors,
    ruleSetIndex
  } = props

  return (
    <section className="flex flex-row mt-5 border-t-2 py-2">
      <PriceCommissionable
        disabledProp={
        netBookingFeeAbsoluteValue != ""
          || netBookingFeePercentValue != ""
          || netPriceSellingValue != ""
        }
        commissionableBookingFeeAbsolute={commissionableBookingFeeAbsolute}
        commissionableBookingFeeAbsoluteValue={commissionableBookingFeeAbsoluteValue}
        commissionableBookingFeePercent={commissionableBookingFeePercent}
        commissionableBookingFeePercentValue={commissionableBookingFeePercentValue}
        commissionablePriceSelling={commissionablePriceSelling}
        commissionablePriceSellingValue={commissionablePriceSellingValue}
      />
      <Divider />
      <PriceNet
        disabledProp={
          commissionableBookingFeeAbsoluteValue != ""
          || commissionableBookingFeePercentValue != ""
          || commissionablePriceSellingValue != ""
        }
        netBookingFeeAbsolute={netBookingFeeAbsolute}
        netBookingFeeAbsoluteValue={netBookingFeeAbsoluteValue}
        netBookingFeePercent={netBookingFeePercent}
        netBookingFeePercentValue={netBookingFeePercentValue}
        netPriceSelling={netPriceSelling}
        netPriceSellingValue={netPriceSellingValue}
      />
      <Divider />
      <CodeAndCommission errors={errors} ruleSetIndex={ruleSetIndex} nameProp={offerCode} insideCommissionRate={insideCommissionRate}/>
    </section>
  )
}
import PriceNet from "./PricingSections/PriceNet.tsx";
import {Divider} from "../../../elements/Divider.tsx";
import PriceCommissionable from "./PricingSections/PriceCommissionable.tsx";
import {BottomSectionInterface} from "../../../../configs/interface/BottomSectionInterface.ts";
import {OfferCode} from "./CodeAndCommission/OfferCode.tsx";
import {InsideCommissionRate} from "./CodeAndCommission/InsideCommissionRate.tsx";
export const BottomSection = (props: BottomSectionInterface) => {

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
    errors,
    ruleSetIndex,
    offerCode,
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
      <div className="flex flex-col gap-4">
        <OfferCode errors={errors} ruleSetIndex={ruleSetIndex} offerCode={offerCode}/>
        <InsideCommissionRate insideCommissionRate={insideCommissionRate} />
      </div>
    </section>
  )
}
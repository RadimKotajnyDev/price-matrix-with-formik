import PriceNet from "./PricingSections/PriceNet.tsx";
import {Divider} from "../../../elements/Divider.tsx";
import CodeAndCommission from "./CodeAndCommission/CodeAndCommission.tsx";
import PriceCommissionable from "./PricingSections/PriceCommissionable.tsx";

interface Props {
  netBookingFeeAbsolute: string,
  netBookingFeeAbsoluteValue: number | string | null,
  netBookingFeePercent: string,
  netBookingFeePercentValue: number | string | null,
  netPriceSelling: string,
  netPriceSellingValue: number | string | null,
  commissionableBookingFeeAbsolute: string,
  commissionableBookingFeeAbsoluteValue: number | string | null,
  commissionableBookingFeePercent: string,
  commissionableBookingFeePercentValue: number | string | null,
  commissionablePriceSelling: string,
  commissionablePriceSellingValue: number | string | null,
  offerCode: string,
  insideCommissionRate: string,
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
  } = props

  return (
    <section className="flex flex-row mt-5 border-t-2 pt-2">
      <PriceNet
        netBookingFeeAbsolute={netBookingFeeAbsolute}
        netBookingFeeAbsoluteValue={netBookingFeeAbsoluteValue}
        netBookingFeePercent={netBookingFeePercent}
        netBookingFeePercentValue={netBookingFeePercentValue}
        netPriceSelling={netPriceSelling}
        netPriceSellingValue={netPriceSellingValue}
      />
      <Divider />
      <PriceCommissionable
        commissionableBookingFeeAbsolute={commissionableBookingFeeAbsolute}
        commissionableBookingFeeAbsoluteValue={commissionableBookingFeeAbsoluteValue}
        commissionableBookingFeePercent={commissionableBookingFeePercent}
        commissionableBookingFeePercentValue={commissionableBookingFeePercentValue}
        commissionablePriceSelling={commissionablePriceSelling}
        commissionablePriceSellingValue={commissionablePriceSellingValue}
      />
      <Divider />
      <CodeAndCommission nameProp={offerCode} insideCommissionRate={insideCommissionRate}/>
    </section>
  )
}
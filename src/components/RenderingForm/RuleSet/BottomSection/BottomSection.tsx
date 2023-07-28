import Pricing from "./Pricing.tsx";
import {Divider} from "../../../elements/Divider.tsx";
import CodeAndCommission from "./CodeAndCommission/CodeAndCommission.tsx";
import Commissionable from "./Commissionable.tsx";

interface Props {
  bookingFeeAbsolute: string,
  bookingFeePercent: string,
  bookingFeeAbsoluteValue: number | "",
  bookingFeePercentValue: number | "",
  priceSelling: string,
  priceSellingValue: number | "",
  offerCode: string,
  insideCommissionRate: string,
}

export const BottomSection = (props: Props) => {

  const {
    bookingFeeAbsolute,
    bookingFeePercent,
    bookingFeeAbsoluteValue,
    bookingFeePercentValue,
    priceSelling,
    priceSellingValue,
    offerCode,
    insideCommissionRate,
  } = props

  return (
    <section className="flex flex-row mt-5 border-t-2 pt-2">
      <Pricing
        bookingFeeAbsoluteValue={bookingFeeAbsoluteValue}
        bookingFeePercentValue={bookingFeePercentValue}
        priceSellingValue={priceSellingValue}
        bookingFeeAbsolute={bookingFeeAbsolute}
        bookingFeePercent={bookingFeePercent}
        priceSelling={priceSelling}
      />
      <Divider />
      <Commissionable
        bookingFeeAbsoluteValue={bookingFeeAbsoluteValue}
        bookingFeePercentValue={bookingFeePercentValue}
        priceSellingValue={priceSellingValue}
        bookingFeeAbsolute={bookingFeeAbsolute}
        bookingFeePercent={bookingFeePercent}
        priceSelling={priceSelling}
      />
      <Divider />
      <CodeAndCommission nameProp={offerCode} insideCommissionRate={insideCommissionRate}/>
    </section>
  )
}
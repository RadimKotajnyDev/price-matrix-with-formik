import {InsideCommissionRate} from "./InsideCommissionRate.tsx";
import {OfferCode} from "./OfferCode.tsx"

export default function CodeAndCommission({nameProp, insideCommissionRate}: any) {
  return (
    <div className="flex flex-col gap-4 border-l-2 ml-4 pl-4">
      <OfferCode nameProp={nameProp} />
      <InsideCommissionRate insideCommissionRate={insideCommissionRate} />
    </div>
  )
}
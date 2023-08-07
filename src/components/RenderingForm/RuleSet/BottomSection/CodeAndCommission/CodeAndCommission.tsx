import {InsideCommissionRate} from "./InsideCommissionRate.tsx";
import {OfferCode} from "./OfferCode.tsx"

interface Props {
  nameProp: string,
  insideCommissionRate: string,
  errors: any,
  ruleSetIndex: number
}

export default function CodeAndCommission(props: Props) {
  const {nameProp, insideCommissionRate, errors, ruleSetIndex} = props
  return (
    <div className="flex flex-col gap-4">
      <OfferCode errors={errors} ruleSetIndex={ruleSetIndex} nameProp={nameProp} />
      <InsideCommissionRate insideCommissionRate={insideCommissionRate} />
    </div>
  )
}
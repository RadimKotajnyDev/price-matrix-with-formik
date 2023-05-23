import Note from "./Note.tsx";
import Pricing from "./Pricing.tsx";
import OfferCode from "./OfferCode.tsx";
import Button from "../elements/Button.tsx";
import {ButtonClass} from "../../configs/classNames/ClassNames.tsx";

interface RulesetProps {
  rulesetID: number,
  rulesetPriority: number,
  offerCode: string,
  bookingFeeAbsolute: string | number,
  bookingFeePercent: string | number,
  insideCommission: string | number,
  priceSelling: string | number,
  removeRuleset: any
}

export default function Ruleset(props: RulesetProps) {
  const {
    rulesetID,
    rulesetPriority,
    offerCode,
    bookingFeeAbsolute,
    bookingFeePercent,
    insideCommission,
    priceSelling,
    removeRuleset
  }: RulesetProps = props
  return (
    <div
      className="w-fit p-4 bg-gray-300 my-4 rounded-md">
      <div>
        <div className="flex flex-row justify-between mb-2">
          <p className="font-semibold text-4xl">Ruleset {rulesetID}
            <span className="font-thin mx-2">|</span>
            Priority: #{rulesetPriority}
          </p>
          <Button onClickProp={removeRuleset}
                  classNameProp={ButtonClass + " bg-red-600"}
          >Remove Ruleset</Button>
        </div>
        {/* TODO: Priority changer */}
        <Note />
        {/* TODO: Rules */}
        <div className="flex flex-row">
          <Pricing
            bookingFeeAbsolute={bookingFeeAbsolute}
            bookingFeePercent={bookingFeePercent}
            insideCommission={insideCommission}
            priceSelling={priceSelling}
          />
          <OfferCode nameProp={offerCode} />
        </div>
      </div>
    </div>
  )
}
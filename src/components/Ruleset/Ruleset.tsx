import Note from "./Note.tsx";
import Pricing from "./Pricing.tsx";
import OfferCode from "./OfferCode.tsx";
import Button from "../elements/Button.tsx";
import {ButtonClass} from "../../configs/classNames/ClassNames.tsx";
import {AiOutlineClose} from "react-icons/all";
import Rules from "./Rules.tsx";

interface RulesetProps {
  rulesetID: number,
  rulesetPriority: number,
  rulesName: any,
  offerCode: string,
  bookingFeeAbsolute?: number | string,
  bookingFeePercent?: number | string,
  insideCommission?: number | string,
  priceSelling?: number | string,
  removeRuleset: any,
  children: any
}

export default function Ruleset(props: RulesetProps) {
  const {
    rulesetID,
    rulesetPriority,
    rulesName,
    offerCode,
    bookingFeeAbsolute,
    bookingFeePercent,
    insideCommission,
    priceSelling,
    removeRuleset,
    children
  }: RulesetProps = props
  return (
    <div
      className="w-fit p-4  my-4 rounded-md bg-gray-200 outline-gray-200 shadow-lg">
      <div>
        <div className="flex flex-row justify-between mb-2">
          <p className="font-semibold text-4xl">Ruleset {rulesetID}
            <span className="font-thin mx-2">|</span>
            Priority: #{rulesetPriority}
          </p>
          <Button onClickProp={removeRuleset}
                  classNameProp={ButtonClass + " bg-red-600"}
          >
              <AiOutlineClose size={25} />
          </Button>
        </div>
        {/* TODO: Priority changer */}
        <Note />
        {/* RULES */}
        {children}
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
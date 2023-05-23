import Note from "./Note.tsx";
import Pricing from "./Pricing.tsx";
import OfferCode from "./OfferCode.tsx";

interface RulesetProps {
  RulesetID: number,
  RulesetPriority: number,
  offerCode: string
}

export default function Ruleset({ RulesetID, RulesetPriority, offerCode}: RulesetProps) {

  return (
    <div
      className="w-fit p-4 bg-gray-300 my-4 rounded-md">
      <div>
        <p className="font-semibold text-4xl">Ruleset {RulesetID}
          <span className="font-thin mx-2">|</span>
          Priority: #{RulesetPriority}
        </p>
        {/* TODO: Priority changer */}
        <Note />
        {/* TODO: Rules */}
        <div className="flex flex-row">
          <Pricing />
          <OfferCode nameProp={offerCode} />
        </div>
      </div>
    </div>
  )
}
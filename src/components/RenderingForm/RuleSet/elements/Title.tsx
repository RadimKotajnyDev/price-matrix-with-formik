import {RuleSetInterface} from "../../../../configs/interface/PriceMatrixInterface.ts";

export const Title = (props: {ruleSetId: RuleSetInterface['ruleSetId'], ruleSetPriority: RuleSetInterface['priority']}) => {

  const {ruleSetId, ruleSetPriority} = props

  return (
    <p className="font-semibold text-3xl text-secondary">Ruleset {ruleSetId || <span className="font-light">-</span>}
      <span className="font-thin mx-2">|</span>
      Priority: #{ruleSetPriority}
    </p>
  )
}
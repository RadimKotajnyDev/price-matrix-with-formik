import {RuleSetInterface} from "../../../../configs/interface/PriceMatrixInterface.ts";

export const Title = (props: {ruleSetId: RuleSetInterface['ruleSetId'], ruleSetPriority: RuleSetInterface['priority']}) => {
  return (
    <p className="font-semibold text-3xl text-secondary">Ruleset {props.ruleSetId || <span className="font-light">-</span>}
      <span className="font-thin mx-2">|</span>
      Priority: #{props.ruleSetPriority}
    </p>
  )
}
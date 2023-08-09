import {RuleSetPropsInterface} from "../../../../../configs/interface/RuleSetPropsInterface.ts";

export const AddRule = (values: RuleSetPropsInterface['values'], setValues: RuleSetPropsInterface['setValues'], ruleSetIndex: number) => {

  const newRule = {
    "ruleSetId": "",
    "ruleId": "",
    "fieldId": 0,
    "compareOperatorId": 0,
    "value" : ""
  }

  const updatedRuleSets = [...values.ruleSets];
  const updatedRules = [...updatedRuleSets[ruleSetIndex].rules];

  updatedRules.push(newRule);
  updatedRuleSets[ruleSetIndex].rules = updatedRules;

  setValues({
    ...values,
    ruleSets: updatedRuleSets,
  });
}
export function RemoveRule(values: RuleSetPropsInterface['values'], setValues: RuleSetPropsInterface['setValues'], ruleSetIndex: number, ruleIndex: number) {
  values.ruleSets[ruleSetIndex].rules.splice(ruleIndex, 1)
  const updatedRulesets = [...values.ruleSets]

  setValues({
    ...values,
    ruleSets: updatedRulesets,
  });
}
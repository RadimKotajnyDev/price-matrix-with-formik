import {RuleSetPropsInterface} from "../../../../configs/interface/RuleSetPropsInterface.ts";

export function AddExclusionDateRow(values: RuleSetPropsInterface['values'], setValues: RuleSetPropsInterface['setValues'], ruleSetIndex: number) {
  const newRow = {
    "id": values.ruleSets[ruleSetIndex].exclusionDates.length,
    "time": "",
    "dateFrom": "",
    "dateTo": ""
  }
  const updatedRuleSets = [...values.ruleSets];
  const updatedExclusionDates = [...updatedRuleSets[ruleSetIndex].exclusionDates];

  updatedExclusionDates.push(newRow)
  updatedRuleSets[ruleSetIndex].exclusionDates = updatedExclusionDates;

  setValues({
    ...values,
    ruleSets: updatedRuleSets,
  });
}

export function RemoveExclusionDateRow(values: RuleSetPropsInterface['values'], setValues: RuleSetPropsInterface['setValues'], ruleSetIndex: number, exclusionDatesIndex: number) {
  values.ruleSets[ruleSetIndex].exclusionDates.splice(exclusionDatesIndex, 1)
  const updatedRulesets = [...values.ruleSets]

  setValues({
    ...values,
    ruleSets: updatedRulesets,
  });
}
export const AddRule = (values: any, setValues: any, ruleSetIndex: number) => {

  const newRule = {
    "ruleSetId": "",
    "ruleId": "",
    "fieldId": 0,
    "compareOperatorId": 0,
    "valueInt": "",
    "valueString": "",
    "valueDateTime": "",
    "valueDecimal": "",
    "priority": ""
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
export function RemoveRule(values: any, setValues: any, ruleSetIndex: number, ruleIndex: number) {
  values.ruleSets[ruleSetIndex].rules.splice(ruleIndex, 1)
  const updatedRulesets = [...values.ruleSets]

  setValues({
    ...values,
    ruleSets: updatedRulesets,
  });
}
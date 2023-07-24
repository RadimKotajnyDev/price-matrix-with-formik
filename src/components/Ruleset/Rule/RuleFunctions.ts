export const AddRule = (values: any, setValues: any, rulesetIndex: number) => {

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

  const updatedRuleSets = [...values.rulesets];
  const updatedRules = [...updatedRuleSets[rulesetIndex].rules];

  updatedRules.push(newRule);
  updatedRuleSets[rulesetIndex].rules = updatedRules;

  setValues({
    ...values,
    rulesets: updatedRuleSets,
  });
}
export function RemoveRule(values: any, setValues: any, rulesetIndex: number, ruleIndex: number) {
  //const updatedRulesets = [...values.rulesets];
  //const updatedRules = [...updatedRulesets[rulesetIndex].rules];

  //updatedRules.splice(ruleIndex, 1);
  values.rulesets[rulesetIndex].rules.splice(ruleIndex, 1)
  const updatedRulesets = [...values.rulesets]
  //updatedRulesets[rulesetIndex].rules = [...updatedRules];

  setValues({
    ...values,
    rulesets: updatedRulesets,
  });
}
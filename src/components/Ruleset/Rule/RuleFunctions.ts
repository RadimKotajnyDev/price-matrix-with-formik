export const AddRule = (values: any, setValues: any, rulesetIndex: number) => {

  const newRule = {
    "ruleSetId": null,
    "ruleId": null,
    "fieldId": 0,
    "compareOperatorId": 0,
    "valueInt": null,
    "valueString": null,
    "valueDateTime": null,
    "valueDecimal": null,
    "priority": null
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
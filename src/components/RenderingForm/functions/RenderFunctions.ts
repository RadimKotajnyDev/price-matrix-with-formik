import {defaultRuleset} from "../../../configs/ruleset/defaultRuleset.tsx";

type defaultRuleSet = {
  insideCommissionRate: string;
  note: string;
  bookingFeeAbsolute: string;
  offerCode: string;
  priceSelling: string;
  bookingFeePercent: string;
  rules: {
    compareOperatorId: number;
    valueString: string;
    valueDecimal: string;
    valueDateTime: string;
    ruleId: string;
    valueInt: string;
    priority: string;
    ruleSetId: string;
    fieldId: number
  }[];
  logicalOperatorId: number;
  priority: string | number;
  ruleSetId: string
}

interface Rules {
  map: any,
  ruleSetId: number | "",
  ruleId: number | "",
  fieldId: number | "",
  priority?: null | string,
  compareOperatorId: number | string,
  valueInt: number | string,
  valueDecimal: number | string,
  valueDateTime: string,
  valueString: string,
}

interface ruleSets {
  ruleSetId: number | "",
  logicalOperatorId: number | "",
  priority: number | "",
  rules: Rules,
  priceSelling: number | string,
  bookingFeePercent: number | string,
  bookingFeeAbsolute: number | string,
  insideCommissionRate: number | string,
  note: string,
  offerCode: string
}

type Values = { ruleSets: ruleSets[]; }

export function NullDataToEmptyStrings(data: any) {
  data.ruleSets.map((item: ruleSets, index: number) => {
    data.ruleSets[index] = {
      ruleSetId: item.ruleSetId === null ? "" : item.ruleSetId,
      logicalOperatorId: item.logicalOperatorId === null ? "" : item.logicalOperatorId,
      priority: item.priority === null ? "" : item.priority,
      rules: item.rules.map((rule: Rules) => {
        return {
          ruleSetId: rule.ruleSetId === null ? "" : rule.ruleSetId,
          ruleId: rule.ruleId === null ? "" : rule.ruleId,
          fieldId: rule.fieldId === null ? "" : rule.fieldId,
          priority: rule.priority === null ? "" : rule.priority,
          compareOperatorId: rule.compareOperatorId === null ? "" : rule.compareOperatorId,
          valueInt: rule.valueInt === null ? "" : rule.valueInt,
          valueDecimal: rule.valueDecimal === null ? "" : rule.valueDecimal,
          valueDateTime: rule.valueDateTime === null ? "" : rule.valueDateTime,
          valueString: rule.valueString === null ? "" : rule.valueString,
        }
      }),
      priceSelling: item.priceSelling === null ? "" : item.priceSelling,
      bookingFeePercent: item.bookingFeePercent === null ? "" : item.bookingFeePercent,
      bookingFeeAbsolute: item.bookingFeeAbsolute === null ? "" : item.bookingFeeAbsolute,
      insideCommissionRate: item.insideCommissionRate === null ? "" : item.insideCommissionRate,
      note: item.note === null ? "" : item.note,
      offerCode: item.offerCode === null ? "" : item.offerCode,
    }
  })
  return console.log(data)
}

export function EmptyStringsDataToNull(data: any) {
  console.log(data)
  data.ruleSets.map((item: ruleSets, index: number) => {
    data.ruleSets[index] = {
      ruleSetId: item.ruleSetId === "" ? null : item.ruleSetId,
      logicalOperatorId: item.logicalOperatorId === "" ? null : item.logicalOperatorId,
      priority: item.priority === "" ? null : item.priority,
      rules: item.rules.map((rule: Rules) => {
        return {
          ruleSetId: rule.ruleSetId === "" ? null : rule.ruleSetId,
          ruleId: rule.ruleId === "" ? null : rule.ruleId,
          fieldId: rule.fieldId === "" ? null : rule.fieldId,
          priority: rule.priority === "" ? null : rule.priority,
          compareOperatorId: rule.compareOperatorId === "" ? null : rule.compareOperatorId,
          valueInt: rule.valueInt === "" ? null : rule.valueInt,
          valueDecimal: rule.valueDecimal === "" ? null : rule.valueDecimal,
          valueDateTime: rule.valueDateTime === "" ? null : rule.valueDateTime,
          valueString: rule.valueString === "" ? null : rule.valueString,
        }
      }),
      priceSelling: item.priceSelling === "" ? null : item.priceSelling,
      bookingFeePercent: item.bookingFeePercent === "" ? null : item.bookingFeePercent,
      bookingFeeAbsolute: item.bookingFeeAbsolute === "" ? null : item.bookingFeeAbsolute,
      insideCommissionRate: item.insideCommissionRate === "" ? null : item.insideCommissionRate,
      note: item.note === "" ? null : item.note,
      offerCode: item.offerCode === "" ? null : item.offerCode,
    }
  })
  return data;
}

export function RemapPriorities(jsonData: any) {
  const ruleSets = [...jsonData]; // Vytvoření kopie pole jsonData.ruleSets

  const jsonLength = ruleSets.length;

  const priorities = Array.from({length: jsonLength}, (_, index) => index + 1);

  ruleSets.forEach((ruleSet: { priority: number }, index: number) => {
    ruleSet.priority = priorities[index];
  });

  return ruleSets;
}


export function PriorityUp(values: any, setValues: (values: Values) => void, ruleSetIndex: number) {
  if (ruleSetIndex > 0) {
    let updatedRuleSets = [...values.ruleSets];

    [updatedRuleSets[ruleSetIndex], updatedRuleSets[ruleSetIndex - 1]] = [
      updatedRuleSets[ruleSetIndex - 1],
      updatedRuleSets[ruleSetIndex],
    ];

    updatedRuleSets = RemapPriorities(updatedRuleSets)
    setValues({
      ...values,
      ruleSets: updatedRuleSets,
    });
  }
}

export function PriorityDown(values: any, setValues: (values: Values) => void, ruleSetIndex: number) {
  if (ruleSetIndex < values.ruleSets.length - 1) {
    let updatedRuleSets = [...values.ruleSets];

    [updatedRuleSets[ruleSetIndex], updatedRuleSets[ruleSetIndex + 1]] = [
      updatedRuleSets[ruleSetIndex + 1],
      updatedRuleSets[ruleSetIndex],
    ];

    updatedRuleSets = RemapPriorities(updatedRuleSets)

    setValues({
      ...values,
      ruleSets: updatedRuleSets,
    });
  }
}

export const HandleRemoveRuleSet = (values: Values, setValues: (values: Values) => void, index: number) => {
  values.ruleSets.splice(index, 1);

  RemapPriorities(values.ruleSets)

  setValues(values);
};

export const AddRuleset = (values: Values, setValues: (values: object) => void) => {
  const newRuleset: defaultRuleSet = {...defaultRuleset};
  newRuleset.priority = values.ruleSets.length + 1;
  newRuleset.ruleSetId = "" //backend will create new ID

  const updatedValues = {
    ...values,
    ruleSets: [...values.ruleSets, newRuleset],
  };
  setValues(updatedValues);
};

export const ScrollToLastElement = (ref: any) => {
  const lastChildElement = ref.current as HTMLElement | null;
  lastChildElement?.lastElementChild?.scrollIntoView({behavior: 'smooth'});
};
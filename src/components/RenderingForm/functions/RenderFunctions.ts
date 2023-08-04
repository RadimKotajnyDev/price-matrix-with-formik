import {defaultRuleset} from "../../../configs/ruleset/defaultRuleset.tsx";
import {ruleSet, rulesType} from "./RuleSetType.ts";

type Values = { ruleSets: ruleSet[]; }

export function RuleSetEmptyStringsToNull(object: ruleSet) {
  return {
    ruleSetId: object.ruleSetId === "" ? null : object.ruleSetId,
    priority: object.priority === "" ? null : object.priority,
    rules: object.rules.map((rule: rulesType) => {
      return {
        ruleId: rule.ruleId === "" ? null : rule.ruleId,
        fieldId: rule.fieldId === "" ? null : rule.fieldId,
        compareOperatorId: rule.compareOperatorId === "" ? null : rule.compareOperatorId,
        value: rule.value === "" ? null : rule.value
      }
    }),
    priceCommissionable: {
      priceSelling:
        object.priceCommissionable.priceSelling === "" ? null : object.priceCommissionable.priceSelling,
      bookingFeeAbsolute:
        object.priceCommissionable.bookingFeeAbsolute === "" ? null : object.priceCommissionable.bookingFeeAbsolute,
      bookingFeePercent:
        object.priceCommissionable.bookingFeePercent === "" ? null : object.priceCommissionable.bookingFeePercent,
    },
    priceNet: {
      priceSelling: object.priceNet.priceSelling === "" ? null : object.priceNet.priceSelling,
      bookingFeeAbsolute: object.priceNet.bookingFeeAbsolute === "" ? null : object.priceNet.bookingFeeAbsolute,
      bookingFeePercent: object.priceNet.bookingFeePercent === "" ? null : object.priceNet.bookingFeePercent,
    },
    insideCommissionRate: object.insideCommissionRate === "" ? null : object.insideCommissionRate,
    note: object.note === "" ? null : object.note,
    offerCode: object.offerCode === "" ? null : object.offerCode,
  }
}


export function NullDataToEmptyStrings(data: { id: number, name: string, ruleSets: ruleSet[] }) {
  return data.ruleSets.map((item: ruleSet, index: number) => {
    data.ruleSets[index] = {
      ruleSetId: item.ruleSetId === null ? "" : item.ruleSetId,
      priority: item.priority === null ? "" : item.priority,
      rules: item.rules.map((rule: rulesType) => {
        return {
          ruleId: rule.ruleId === null ? "" : rule.ruleId,
          fieldId: rule.fieldId === null ? "" : rule.fieldId,
          compareOperatorId: rule.compareOperatorId === null ? "" : rule.compareOperatorId,
          value: rule.value === null ? "" : rule.value
        }
      }),
      priceCommissionable: {
        priceSelling:
          item.priceCommissionable.priceSelling === null ? "" : item.priceCommissionable.priceSelling,
        bookingFeeAbsolute:
          item.priceCommissionable.bookingFeeAbsolute === null ? "" : item.priceCommissionable.bookingFeeAbsolute,
        bookingFeePercent:
          item.priceCommissionable.bookingFeePercent === null ? "" : item.priceCommissionable.bookingFeePercent,
      },
      priceNet: {
        priceSelling: item.priceNet.priceSelling === null ? "" : item.priceNet.priceSelling,
        bookingFeeAbsolute: item.priceNet.bookingFeeAbsolute === null ? "" : item.priceNet.bookingFeeAbsolute,
        bookingFeePercent: item.priceNet.bookingFeePercent === null ? "" : item.priceNet.bookingFeePercent,
      },
      insideCommissionRate: item.insideCommissionRate === null ? "" : item.insideCommissionRate,
      note: item.note === null ? "" : item.note,
      offerCode: item.offerCode === null ? "" : item.offerCode,
    }
  })
}

export function EmptyStringsToNull(data: { id: number, name: string, ruleSets: ruleSet[] }) {
  data.ruleSets.map((item: ruleSet, index: number) => {
    data.ruleSets[index] = {
      ruleSetId: item.ruleSetId === "" ? null : item.ruleSetId,
      priority: item.priority === "" ? null : item.priority,
      rules: item.rules.map((rule: rulesType) => {
        return {
          ruleId: rule.ruleId === "" ? null : rule.ruleId,
          fieldId: rule.fieldId === "" ? null : rule.fieldId,
          compareOperatorId: rule.compareOperatorId === "" ? null : rule.compareOperatorId,
          value: rule.value === "" ? null : rule.value
        }
      }),
      priceCommissionable: {
        priceSelling:
          item.priceCommissionable.priceSelling === "" ? null : item.priceCommissionable.priceSelling,
        bookingFeeAbsolute:
          item.priceCommissionable.bookingFeeAbsolute === "" ? null : item.priceCommissionable.bookingFeeAbsolute,
        bookingFeePercent:
          item.priceCommissionable.bookingFeePercent === "" ? null : item.priceCommissionable.bookingFeePercent,
      },
      priceNet: {
        priceSelling: item.priceNet.priceSelling === "" ? null : item.priceNet.priceSelling,
        bookingFeeAbsolute: item.priceNet.bookingFeeAbsolute === "" ? null : item.priceNet.bookingFeeAbsolute,
        bookingFeePercent: item.priceNet.bookingFeePercent === "" ? null : item.priceNet.bookingFeePercent,
      },
      insideCommissionRate: item.insideCommissionRate === "" ? null : item.insideCommissionRate,
      note: item.note === "" ? null : item.note,
      offerCode: item.offerCode === "" ? null : item.offerCode,
    }
  })
  return console.log(data)
}


export function RemapPriorities(jsonData: ruleSet[]) {
  const ruleSets = [...jsonData]; // Vytvoření kopie pole jsonData.ruleSets

  const jsonLength = ruleSets.length;

  const priorities = Array.from({length: jsonLength}, (_, index) => jsonLength - index - 1);

  ruleSets.forEach((ruleSet: ruleSet, index: number) => {
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

  const newRuleset: ruleSet = {...defaultRuleset};
  newRuleset.priority = values.ruleSets.length;
  newRuleset.ruleSetId = "" //backend will create new ID

  const updatedValues = {
    ...values,
    ruleSets: [newRuleset, ...values.ruleSets],
  };
  setValues(updatedValues);
};

export const ScrollToTop = (ref: any) => {
  const firstChildElement = ref.current as HTMLElement | null;
  firstChildElement?.firstElementChild?.scrollIntoView({ behavior: 'smooth' });
};
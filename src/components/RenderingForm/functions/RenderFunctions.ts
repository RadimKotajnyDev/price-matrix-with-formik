import {defaultRuleset} from "../../../configs/ruleset/defaultRuleset.tsx";
import {RefObject} from "react";
import {RuleSetPropsInterface} from "../../../configs/interface/RuleSetPropsInterface.ts";
import {RuleSetInterface, RulesType} from "../../../configs/interface/PriceMatrixInterface.ts";
import {format, isValid, parse} from "date-fns"

export async function NullDataToEmptyStrings(data: { id: number, name: string, ruleSets: RuleSetInterface[] }) {

  function CheckValueNull(input: null | string) {
    if (input === null) {
      return ""
    }
    if (isValid(parse(<string>input, 'yyyy-MM-dd\'T\'HH:mm:ss', new Date()))) {
      const date = parse(<string>input, 'yyyy-MM-dd\'T\'HH:mm:ss', new Date())
      return format(date, 'yyyy-MM-dd');
    }
    return input;
  }

  data?.ruleSets?.sort((a, b) => ((b.priority || 0) as number) - ((a.priority || 0) as number))
    .map((item: RuleSetInterface, index: number) => {
    data.ruleSets[index] = {
      ruleSetId: item.ruleSetId === null ? "" : item.ruleSetId,
      priority: item.priority === null ? "" : item.priority,
      rules: item?.rules?.sort((a, b) => ((b.ruleId || item?.rules?.length + 1) as number) - ((a.ruleId || item?.rules?.length) as number))
        .map((rule: RulesType) => {
        return {
          ruleId: rule.ruleId === null ? "" : rule.ruleId,
          fieldId: rule.fieldId === null ? "" : rule.fieldId,
          compareOperatorId: rule.compareOperatorId === null ? "" : rule.compareOperatorId,
          value: CheckValueNull(rule.value)
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
  return data;
}

export async function EmptyStringToNullData(data: { id: number, name: string, ruleSets: RuleSetInterface[] }) {

  function CheckValueEmptyStrings(input: null | string) {

    if (input === "") {
      return null
    }
    if (isValid(parse(<string>input, 'yyyy-MM-dd', new Date()))) {
      const date = parse(<string>input, 'yyyy-MM-dd', new Date())
      return format(date, 'yyyy-MM-dd\'T\'HH:mm:ss');
    }
    return input
  }


  data?.ruleSets?.sort((a, b) => ((b.priority || 0) as number) - ((a.priority || 0) as number))
    .map((item: RuleSetInterface, index: number) => {
    data.ruleSets[index] = {
      ruleSetId: item.ruleSetId === "" ? null : item.ruleSetId,
      priority: item.priority === "" ? null : item.priority,
      rules: item?.rules?.sort((a, b) => ((a.ruleId || item?.rules?.length + 1) as number) - ((b.ruleId || item?.rules?.length) as number))
        .map((rule: RulesType) => {
        return {
          ruleId: rule.ruleId === "" ? null : rule.ruleId,
          fieldId: rule.fieldId === "" ? null : rule.fieldId,
          compareOperatorId: rule.compareOperatorId === "" ? null : rule.compareOperatorId,
          value: CheckValueEmptyStrings(rule.value)
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

  console.log(data)

  return data;
}

export function RemapPriorities(jsonData: RuleSetInterface[]) {
  const ruleSets = [...jsonData];

  const jsonLength = ruleSets.length;

  const priorities = Array.from({length: jsonLength}, (_, index) => jsonLength - index);

  ruleSets.forEach((ruleSet: RuleSetInterface, index: number) => {
    ruleSet.priority = priorities[index];
  });

  return ruleSets;
}


export function PriorityUp(values: RuleSetPropsInterface['values'], setValues: RuleSetPropsInterface['setValues'], ruleSetIndex: number) {
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

export function PriorityDown(values: RuleSetPropsInterface['values'], setValues: RuleSetPropsInterface['setValues'], ruleSetIndex: number) {
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

export const HandleRemoveRuleSet = (values: RuleSetPropsInterface['values'], setValues: RuleSetPropsInterface['setValues'], index: number) => {

  values.ruleSets.splice(index, 1);

  RemapPriorities(values.ruleSets)

  setValues(values);
};

export const AddRuleset = (values: RuleSetPropsInterface['values'], setValues: RuleSetPropsInterface['setValues'],) => {

  const newRuleset: RuleSetInterface = {...defaultRuleset};
  newRuleset.priority = values.ruleSets.length + 1;
  newRuleset.ruleSetId = "" //backend will create new ID

  const updatedValues = {
    ...values,
    ruleSets: [newRuleset, ...values.ruleSets],
  };
  setValues(updatedValues);
};

export const ScrollToTop = (ref: RefObject<HTMLElement>) => {
  const firstChildElement = ref.current as HTMLElement | null;
  firstChildElement?.firstElementChild?.scrollIntoView({behavior: 'smooth'});
};
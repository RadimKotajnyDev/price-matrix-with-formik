import {defaultRuleset} from "../../../configs/ruleset/defaultRuleset.tsx";
import {RefObject} from "react";
import {RuleSetPropsInterface} from "../../../configs/interface/RuleSetPropsInterface.ts";
import {RuleSetInterface} from "../../../configs/interface/PriceMatrixInterface.ts";


export async function NullDataToEmptyStrings(data: { id: number, name: string, ruleSets: RuleSetInterface[] }) {
  data.ruleSets.map((item: RuleSetInterface, index: number) => {
    data.ruleSets[index] = {
      ruleSetId: item.ruleSetId === null ? "" : item.ruleSetId,
      priority: item.priority === null ? "" : item.priority,
      priceBandCodes: item.priceBandCodes === null ? "" : item.priceBandCodes,
      dateSelector: {
        performancesFrom: item.dateSelector.performancesFrom,
        performancesTo: item.dateSelector.performancesTo,
        bookingsFrom: item.dateSelector.bookingsFrom,
        bookingsTo: item.dateSelector.bookingsTo,
        //selectedPerformanceTimes: item.dateSelector.selectedPerformanceTimes
        selectedPerformanceTimes: item.dateSelector.selectedPerformanceTimes.map((currObj) => {
          return JSON.stringify(currObj)
        })
      },
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
  data.ruleSets.map((item: RuleSetInterface, index: number) => {
    data.ruleSets[index] = {
      ruleSetId: item.ruleSetId === "" ? null : item.ruleSetId,
      priority: item.priority === "" ? null : item.priority,
      priceBandCodes: item.priceBandCodes === "" ? null : item.priceBandCodes,
      dateSelector: {
        performancesFrom: item.dateSelector.performancesFrom,
        performancesTo: item.dateSelector.performancesTo,
        bookingsFrom: item.dateSelector.bookingsFrom,
        bookingsTo: item.dateSelector.bookingsTo,
        selectedPerformanceTimes: item.dateSelector.selectedPerformanceTimes.map((currObj) => {
          //console.log(JSON.parse(currObj))
          return JSON.parse(<string>currObj)
        })
      },
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
  });
  return data
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
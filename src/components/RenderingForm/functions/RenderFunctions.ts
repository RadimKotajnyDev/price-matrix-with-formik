import {defaultRuleset} from "../../../configs/ruleset/defaultRuleset.tsx";
import {RefObject} from "react";
import {RuleSetPropsInterface} from "../../../configs/interface/RuleSetPropsInterface.ts";
import {ExclusionDatesInterface, RuleSetInterface} from "../../../configs/interface/PriceMatrixInterface.ts";
import {format, isValid, parse} from "date-fns"

// FORMATTING FUNCTIONS
export async function FormatDataFromAPI(data: { id: number, name: string, ruleSets: RuleSetInterface[] }) {

  function CheckValueNullDates(input: null | string) {
    if (input === null) {
      return ""
    }
    if (isValid(parse(<string>input, 'yyyy-MM-dd\'T\'HH:mm:ss', new Date()))) {
      const date = parse(<string>input, 'yyyy-MM-dd\'T\'HH:mm:ss', new Date())
      return format(date, 'yyyy-MM-dd');
    }
    return input;
  }

  function ArrayToStrings(input: string | string[] | null) {
    if (input === null) {
      return ""
    }
    return typeof input !== "string" ? input?.join("\n") : input
  }

  RemapPriorities(data.ruleSets)

  data?.ruleSets?.sort((a, b) => ((b.priority || 0) as number) - ((a.priority || 0) as number))
    .map((item: RuleSetInterface, index: number) => {
      data.ruleSets[index] = {
        isRemoving: false,
        ruleSetId: item.ruleSetId === null ? "" : item.ruleSetId,
        priority: item.priority === null ? "" : item.priority,
        priceBandCodes: ArrayToStrings(item.priceBandCodes),
        dateSelector: {
          performancesRange: {
            performancesFrom: CheckValueNullDates(item.dateSelector.performancesRange.performancesFrom),
            performancesTo: CheckValueNullDates(item.dateSelector.performancesRange.performancesTo),
          },
          bookingsRange: {
            bookingsFrom: CheckValueNullDates(item.dateSelector.bookingsRange.bookingsFrom),
            bookingsTo: CheckValueNullDates(item.dateSelector.bookingsRange.bookingsTo),
          },
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
        exclusionDates: item.exclusionDates?.map((edItem: ExclusionDatesInterface) => {
          return {
            id: edItem.id === null ? "" : edItem.id,
            time: edItem.time === null ? "" : edItem.time,
            dateFrom: CheckValueNullDates(edItem.dateFrom),
            dateTo: CheckValueNullDates(edItem.dateTo)
          }
        })
      }
    })


  return data;
}

export async function FormatDataToAPI(data: { id: number, name: string, ruleSets: RuleSetInterface[], filter?: (item: RuleSetInterface) => object}) {

  function CheckValueEmptyStringsDates(input: null | string) {
    if (input === "") {
      return null
    }
    if (isValid(parse(<string>input, 'yyyy-MM-dd', new Date()))) {
      const date = parse(<string>input, 'yyyy-MM-dd', new Date())
      return format(date, 'yyyy-MM-dd\'T\'HH:mm:ss');
    }
    return input
  }

  function StringsToArray(input: string | string[] | null) {
    if (input === "") {
      return null
    }
    if(typeof input === 'string') {
      return input?.split("\n")
    }
    return input
  }

  //removing ruleSet based on isRemoving boolean
  data.ruleSets = data.ruleSets.filter(item => !item.isRemoving);
  RemapPriorities(data.ruleSets)

  data?.ruleSets?.sort((a, b) => ((b.priority || 0) as number) - ((a.priority || 0) as number))
    .map((item: RuleSetInterface, index: number) => {
      delete data.ruleSets[index].isRemoving;
      data.ruleSets[index] = {
        ruleSetId: item.ruleSetId === "" ? null : item.ruleSetId,
        priority: item.priority === "" ? null : item.priority,
        priceBandCodes: StringsToArray(item.priceBandCodes),
        dateSelector: {
          performancesRange: {
            performancesFrom: CheckValueEmptyStringsDates(item.dateSelector.performancesRange.performancesFrom),
            performancesTo:  CheckValueEmptyStringsDates(item.dateSelector.performancesRange.performancesTo),
          },
          bookingsRange: {
            bookingsFrom:  CheckValueEmptyStringsDates(item.dateSelector.bookingsRange.bookingsFrom),
            bookingsTo: CheckValueEmptyStringsDates(item.dateSelector.bookingsRange.bookingsTo),
          },
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
        exclusionDates: item.exclusionDates?.map((edItem: ExclusionDatesInterface) => {
          return {
            id: edItem.id === "" ? null : edItem.id,
            time: edItem.time === "" ? null : edItem.time,
            dateFrom: CheckValueEmptyStringsDates(edItem.dateFrom),
            dateTo: CheckValueEmptyStringsDates(edItem.dateTo)
          }
        })
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
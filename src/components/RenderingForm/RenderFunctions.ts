import {defaultRuleset} from "../../configs/ruleset/defaultRuleset.tsx";

interface Rules {
    map: any,
    ruleSetId: number | string,
    ruleId: number | string,
    fieldId: number | string,
    priority?: null | string,
    compareOperatorId: number | string,
    valueInt: number | string,
    valueDecimal: number | string,
    valueDateTime: string,
    valueString: string,
}
interface ruleSets {
    ruleSetId: number,
    logicalOperatorId: number,
    priority: number,
    rules: Rules,
    priceSelling: number | string,
    bookingFeePercent: number | string,
    bookingFeeAbsolute: number | string,
    insideCommissionRate: number | string,
    note: string,
    offerCode: string
}

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

export function EmptyStringsDataToNull(data: any, ) {
    console.log(data)
    return data.ruleSets.map((item: ruleSets, index: number) => {
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
}

export function RemapPriorities(jsonData: any) {
    const ruleSets = [...jsonData]; // Vytvoření kopie pole jsonData.rulesets

    const jsonLength = ruleSets.length;

    const priorities = Array.from({ length: jsonLength }, (_, index) => index + 1);

    ruleSets.forEach((ruleSet: any, index: number) => {
        ruleSet.priority = priorities[index];
    });

    return ruleSets;
}


export function PriorityUp(values: any, setValues: any, rulesetIndex: number) {
    if (rulesetIndex > 0) {
        let updatedRulesets = [...values.rulesets];

        [updatedRulesets[rulesetIndex], updatedRulesets[rulesetIndex - 1]] = [
            updatedRulesets[rulesetIndex - 1],
            updatedRulesets[rulesetIndex],
        ];

        updatedRulesets = RemapPriorities(updatedRulesets)
        setValues({
            ...values,
            rulesets: updatedRulesets,
        });
    }
}

export function PriorityDown(values: any, setValues: any, rulesetIndex: number) {
    if (rulesetIndex < values.rulesets.length - 1) {
        let updatedRulesets = [...values.rulesets];

        [updatedRulesets[rulesetIndex], updatedRulesets[rulesetIndex + 1]] = [
            updatedRulesets[rulesetIndex + 1],
            updatedRulesets[rulesetIndex],
        ];

        updatedRulesets = RemapPriorities(updatedRulesets)

        setValues({
            ...values,
            rulesets: updatedRulesets,
        });
    }
}

export const HandleRemoveRuleset = (values: any, setValues: any, index: number) => {
    values.rulesets.splice(index, 1);

    RemapPriorities(values.rulesets)

    setValues(values);
};

export const AddRuleset = (values: any, setValues: any) => {
    const newRuleset = { ...defaultRuleset };
    newRuleset.priority = values.rulesets.length + 1;
    newRuleset.ruleSetId = "" //backend will create new ID

    const updatedValues = {
        ...values,
        rulesets: [...values.rulesets, newRuleset],
    };
    setValues(updatedValues);
};
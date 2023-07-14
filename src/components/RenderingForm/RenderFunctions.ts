import {defaultRuleset} from "../../configs/ruleset/defaultRuleset.tsx";

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
    //TODO: dohodnout se na ID
    newRuleset.ruleSetId = null //backend will create new ID

    const updatedValues = {
        ...values,
        rulesets: [...values.rulesets, newRuleset],
    };
    setValues(updatedValues);
};
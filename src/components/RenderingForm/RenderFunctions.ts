import {defaultRuleset} from "./defaultRuleset.tsx";

export function RemapPriorities(jsonData: any) {
    const jsonLength = jsonData.rulesets.length;

    const priorities = Array.from({ length: jsonLength }, (_, index) => index + 1);

    jsonData.rulesets.forEach((ruleset: any, index: number) => {
        ruleset.priority = priorities[index];
    });

    return jsonData;
}

export const HandleRemoveItem = (values: any, setValues: any, index: number) => {
    values.rulesets.splice(index, 1);

    const updatedValues = RemapPriorities(values);

    setValues(updatedValues);
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

export function PriorityUp(values: any, setValues: any, rulesetIndex: number) {

}

export function PriorityDown(values: any, setValues: any, rulesetIndex: number) {

}
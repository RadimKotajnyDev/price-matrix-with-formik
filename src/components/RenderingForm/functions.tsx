import {defaultRuleset} from "./defaultRuleset.tsx";

export function remapPriorities(jsonData: any) {

    // Získání délky JSON objektu
    const jsonLength = jsonData.rulesets.length;

    // Vytvoření pole priorit
    const priorities = Array.from({ length: jsonLength }, (_, index) => index + 1);

    // Přemapování priorit podle pole
    jsonData.rulesets.forEach((ruleset: any, index: number) => {
        ruleset.priority = priorities[index];
    });

    // Vrácení upraveného JSON objektu
    return jsonData;
}


export const handleRemoveItem = (values: any, setValues: any, index: number) => {
    // Odebrání položky z pole podle indexu
    values.rulesets.splice(index, 1);

    // Přenastavení priorit
    const updatedValues = remapPriorities(values);

    // Aktualizace hodnot ve Formiku
    setValues(updatedValues);
};

export const addRuleset = (values: any, setValues: any) => {
    const min = 1000; // Minimální hodnota (v tomto případě 1000)
    const max = 9999; // Maximální hodnota (v tomto případě 9999)

    // Generování náhodného čtyřmístného čísla
    const newRuleset = { ...defaultRuleset };
    newRuleset.priority = values.rulesets.length + 1;
    //TODO: dohodnout se na ID
    newRuleset.ruleSetId = Math.floor(Math.random() * (max - min + 1)) + min;

    // Aktualizace hodnot ve Formiku
    const updatedValues = {
        ...values,
        rulesets: [...values.rulesets, newRuleset],
    };
    setValues(updatedValues);
};
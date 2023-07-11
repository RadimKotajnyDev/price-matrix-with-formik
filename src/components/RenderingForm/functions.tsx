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
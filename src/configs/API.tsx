import axios from "axios";
import {
  NullDataToEmptyStrings,
  RuleSetEmptyStringsToNull
} from "../components/RenderingForm/functions/RenderFunctions.ts";
import {ruleSet} from "../components/RenderingForm/functions/RuleSetType.ts";

//export const defaultURL = "https://localhost:7062"
export const defaultURL = ""

export async function FetchData() {
  try {
    // Change url to connect to right API
    //const response = await axios.get('https://localhost:7062/pricematrix/1');
    //await axios.post('https://localhost:7062/seed')
    const response = await axios.get('/Data.json') //offline data testing
    return response.data
  } catch (error) {
    console.error(error);
    alert("Fetching data from API error: \n" + error)
  }
}

export async function ReformatRuleSets() {
  const data = await FetchData()
  NullDataToEmptyStrings(data) //uncontrolled input warning fixed
  // reformat data before submit in RenderingForm.tsx
  // sorting ruleSets by priority
  //return [...data.ruleSets].sort((a, b) => b.priority - a.priority);
  return data.ruleSets;
}

export function SaveRuleSet(matrixId: number, ruleSetId: number | string | null, ruleSet: ruleSet) {
  //check empty strings, reformat them
  console.log("Ruleset " + ruleSetId + " has been updated.")
  const apiUrl = `${defaultURL}/pricematrix/${matrixId}/ruleset/${ruleSetId}`
  axios.put(apiUrl, RuleSetEmptyStringsToNull(ruleSet))
    .then(response => {
      console.log('Successfully updated', response.data);
    })
    .catch(error => {
      console.error('Error: \n', error);
    });
}
import axios from "axios";
import {EmptyStringToNullData, NullDataToEmptyStrings} from "../components/RenderingForm/functions/RenderFunctions.ts";
import {ruleSet} from "../components/RenderingForm/functions/RuleSetType.ts";

const defaultURL = "https://localhost:7062"
const matrixID = "3"
//const URL = window.location.pathname

export async function FetchData() {
  try {
    const response = await axios.get(`${defaultURL}/pricematrix/${matrixID}`)
    //console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error);
    alert("Fetching data from API error: \n" + error)
  }
}

export async function ReformatRuleSets() {
  const data = await FetchData()
  await NullDataToEmptyStrings(data) //uncontrolled input warning fixed
  // reformat data before submit in RenderingForm.tsx
  // sorting ruleSets by priority
  //return [...data.ruleSets].sort((a, b) => b.priority - a.priority);
  return await data.ruleSets;
}

export async function SubmitMatrix(values: { id: number, name: string, ruleSets: ruleSet[] }) {
  const refactoredData = await EmptyStringToNullData(values);
  //console.log(refactoredData)
  try {
    const response = await axios.put(`${defaultURL}/pricematrix/${matrixID}`, refactoredData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // re-throw the error to handle it in the calling code
  }
}
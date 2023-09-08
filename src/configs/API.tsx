import axios from "axios";
import {EmptyStringToNullData, NullDataToEmptyStrings} from "../components/RenderingForm/functions/RenderFunctions.ts";
import {RuleSetInterface} from "./interface/PriceMatrixInterface.ts";
import { matrixId, apiUrl } from '../config.ts';

// const defaultURL = "https://localhost:7062"
// const matrixID = "3"

export async function FetchData() {
  try {
    const response = await axios.get(`${apiUrl}/Handlers/PriceMatrixes/GetPriceMatrixRuleSet.ashx?id=${matrixId}`)
    // const response = await axios.get(`${defaultURL}/pricematrix/${matrixID}`)
    return response.data;
  } catch (error) {
    console.error(error);
    alert("Fetching data from API error: \n" + error)
  }
}

export async function ReformatRuleSets() {
  const data = await FetchData()
  await NullDataToEmptyStrings(data)
  return await data.ruleSets;
}

export async function SubmitMatrix(values: { id: number, name: string, ruleSets: RuleSetInterface[] }) {
  const refactoredData = await EmptyStringToNullData(values);
  try {
    const response = await axios.post(`${apiUrl}/Handlers/PriceMatrixes/UpdatePriceMatrixRuleSet.ashx`, refactoredData);
    // const response = await axios.put(`${defaultURL}/pricematrix/${matrixID}`, refactoredData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
} 

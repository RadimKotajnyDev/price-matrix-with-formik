import axios from "axios";
import {EmptyStringToNullData, NullDataToEmptyStrings} from "../components/RenderingForm/functions/RenderFunctions.ts";
import {RuleSetInterface} from "./interface/PriceMatrixInterface.ts";
//import { matrixId, apiUrl } from '../config.ts';

/*
const matrixId = "1";
const apiUrl = "https://localhost:7062"
*/
export async function FetchData() {
  try {
    //const response = await axios.get(`${apiUrl}/pricematrix/${matrixId}`)
    const response = await axios.get("/NewMatrixData.json")
    return response.data
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
  return refactoredData
  /*
  try {
    const response = await axios.put(`${apiUrl}/pricematrix/${matrixId}`, refactoredData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
   */
} 
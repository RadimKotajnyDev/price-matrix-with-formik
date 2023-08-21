import axios from "axios";
import {EmptyStringToNullData, NullDataToEmptyStrings} from "../components/RenderingForm/functions/RenderFunctions.ts";
import {RuleSetInterface} from "./interface/PriceMatrixInterface.ts";
//import { matrixId, apiUrl } from '../config.ts';

/*
const matrixId = "1";
const apiUrl = "https://localhost:7062"
*/

const apiurl = "http://localhost:3000/priceMatrix"
export async function FetchData() {
  try {
    //const response = await axios.get(`${apiUrl}/pricematrix/${matrixId}`)
    //const response = await axios.get("/NewMatrixData.json")
    const response = await axios.get(apiurl)
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
  try {
    //const response = await axios.put(`${apiUrl}/pricematrix/${matrixId}`, refactoredData);
    const response = await axios.put(apiurl, refactoredData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
} 
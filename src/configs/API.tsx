import axios from "axios";
import {NullDataToEmptyStrings} from "../components/RenderingForm/functions/RenderFunctions.ts";

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
  return await data.ruleSets;
}
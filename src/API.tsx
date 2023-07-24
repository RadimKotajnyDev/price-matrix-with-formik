import axios from "axios";
import {NullDataToEmptyStrings} from "./components/RenderingForm/RenderFunctions.ts";

export async function fetchData() {
  try {
    // Change url to connect to right API
    //const response = await axios.get("/test.json");
    const response = await axios.get('https://localhost:7062/pricematrix/1');
    //const response = await axios.get('/offlineTestingData.json') //offline data testing
    return response.data
  } catch (error) {
    console.log(error);
    alert("Fetching data from API error: \n" + error)
  }
}

export async function resolveRulesets() {
  const data = await fetchData()
  await NullDataToEmptyStrings(data) //uncontrolled input warning fixed
  // reformat data before submit in RenderingForm.tsx
  // sorting rulesets by priority
  return [...data.ruleSets].sort((a, b) => a.priority - b.priority);
}
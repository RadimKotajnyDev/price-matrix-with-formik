import axios from "axios";

export async function fetchData() {
  try {
    // Change url to connect to right API
    const response = await axios.get('https://localhost:7062/pricematrix/1');
    return response.data
  } catch (error) {
    console.log(error);
  }
}
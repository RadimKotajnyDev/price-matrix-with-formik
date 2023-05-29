import axios from "axios";

export async function fetchData() {
  try {
    // Change url to connect to right API
    const response = await axios.get('https://localhost:7062/pricematrix/1');
    return response.data
  } catch (error) {
    console.log(error);
    alert("Fetching data from API error: \n" + error)
  }
}

export async function resolveRulesets() {
  const data = await fetchData()
  await data.ruleSets.map((item: any) => {
    return {
      ruleSetId: item.ruleSetId,
      logicalOperatorId: item.logicalOperatorId,
      priority: item.priority,
      rules: item.rules,
      priceSelling: item.priceSelling,
      bookingFeePercent: item.bookingFeePercent,
      bookingFeeAbsolute: item.bookingFeeAbsolute,
      insideCommissionRate: item.insideCommissionRate,
      note: item.note,
      offerCode: item.offerCode,
    }
  }) //TODO: dont reverse an array, sort by priority
  return await data.ruleSets.slice().reverse() //priority rendering
}
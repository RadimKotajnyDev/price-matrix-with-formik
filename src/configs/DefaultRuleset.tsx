const initialRuleset = {
    id: Math.floor(Math.random() * 9000) + 1000,
    priority: 1,
    note: "",
    rules: [
      {
        id: 0,
        field: "PerformanceTime",
        operator: "LessThanOrEqual",
        value: ""
      },
    ],
    offerCode: "",
    BookingFeeAbsolute: 0,
    BookingFeePercent: 0,
    PriceSelling: 0,
    InsideCommission: 0
}

export default initialRuleset

export const defaultRuleset = {
  "ruleSetId": undefined,
  "logicalOperatorId": 1,
  "priority": undefined,
  "rules": [
    {
      "ruleSetId": 1,
      "ruleId": undefined,
      "fieldId": 1,
      "compareOperatorId": 1,
      "valueInt": null,
      "valueString": null,
      "valueDateTime": null,
      "valueDecimal": null,
      "priority": null
    }
  ],
  "priceSelling": null,
  "bookingFeePercent": null,
  "bookingFeeAbsolute": null,
  "insideCommissionRate": null,
  "note": null,
  "offerCode": ""
}
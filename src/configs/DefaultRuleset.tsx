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
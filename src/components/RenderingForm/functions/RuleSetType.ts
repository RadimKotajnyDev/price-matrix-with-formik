export type priceCommissionableType = {
  priceSelling: number | string,
  bookingFeeAbsolute: number | string,
  bookingFeePercent: number | string,
}
export type priceNetType = {
  priceSelling: number | string,
  bookingFeeAbsolute: number | string,
  bookingFeePercent: number | string,
}

export type rulesType = {
  ruleId: number | string,
  fieldId: number | string,
  compareOperatorId: number | string,
  value: string
}

export interface ruleSet {
  ruleSetId: number | string,
  priority: number | string,
  rules: rulesType[],
  priceCommissionable: priceCommissionableType,
  priceNet: priceNetType,
  insideCommissionRate: number | string,
  note: string,
  offerCode: string
}
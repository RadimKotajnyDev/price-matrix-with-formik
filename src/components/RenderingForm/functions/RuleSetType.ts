export type priceCommissionableType = {
  priceSelling: number | string | null,
  bookingFeeAbsolute: number | string | null,
  bookingFeePercent: number | string | null,
}
export type priceNetType = {
  priceSelling: number | string | null,
  bookingFeeAbsolute: number | string | null,
  bookingFeePercent: number | string | null,
}

export type rulesType = {
  ruleId: number | string | null,
  fieldId: number | string | null,
  compareOperatorId: number | string | null,
  value: string | null
}

export interface ruleSet {
  ruleSetId: number | string | null,
  priority: number | string | null,
  rules: rulesType[],
  priceCommissionable: priceCommissionableType,
  priceNet: priceNetType,
  insideCommissionRate: number | string | null,
  note: string | null,
  offerCode: string | null
}
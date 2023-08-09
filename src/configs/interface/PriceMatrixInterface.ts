export interface PriceMatrix {
  id: number;
  name: string;
  ruleSets: RuleSetInterface[];
}
export interface RuleSetInterface {
  ruleSetId: number | string | null,
  priority: number | string | null,
  rules: RulesType[],
  priceCommissionable: PriceCommissionableType,
  priceNet: PriceNetType,
  insideCommissionRate: number | string | null,
  note: string | null,
  offerCode: string | null
}
export type RulesType = {
  ruleId: number | string | null,
  fieldId: number | string | null,
  compareOperatorId: number | string | null,
  value: string | null
}
export type PriceCommissionableType = {
  priceSelling: number | string | null,
  bookingFeeAbsolute: number | string | null,
  bookingFeePercent: number | string | null,
}
export type PriceNetType = {
  priceSelling: number | string | null,
  bookingFeeAbsolute: number | string | null,
  bookingFeePercent: number | string | null,
}




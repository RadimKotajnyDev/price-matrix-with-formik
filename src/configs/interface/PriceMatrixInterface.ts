export interface PriceMatrixInterface {
  id: number;
  name: string;
  ruleSets: RuleSetInterface[];
}
export interface RuleSetInterface {
  ruleSetId: number | string | null,
  priority: number | string | null,
  priceBandCodes: string | null,
  dateSelector: DataSelectorInterface,
  priceCommissionable: PriceCommissionableType,
  priceNet: PriceNetType,
  insideCommissionRate: number | string | null,
  note: string | null,
  offerCode: string | null
}
export interface DataSelectorInterface {
  performancesFrom: string | null,
  performancesTo: string | null,
  bookingsFrom: string | null,
  bookingsTo: string | null,
  selectedPerformanceTimes: selectedPerformanceTime[] | string
}
export interface selectedPerformanceTime { type: number, dayOfWeek: number }


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




import {RuleSetPropsInterface} from "./RuleSetPropsInterface.ts";

export interface BottomSectionInterface extends PriceCommissionableInterface, PriceNetInterface {
  insideCommissionRate: RuleSetPropsInterface['insideCommissionRate'],
  offerCode: RuleSetPropsInterface['offerCode'],
  errors: RuleSetPropsInterface['errors'],
  ruleSetIndex: RuleSetPropsInterface['ruleSetIndex'],
  nameProp?: RuleSetPropsInterface['nameProp']
}

export interface PriceCommissionableInterface {
  commissionableBookingFeeAbsolute: RuleSetPropsInterface['commissionableBookingFeeAbsolute'],
  commissionableBookingFeeAbsoluteValue: RuleSetPropsInterface['commissionableBookingFeeAbsoluteValue'],
  commissionableBookingFeePercent: RuleSetPropsInterface['commissionableBookingFeePercent'],
  commissionableBookingFeePercentValue: RuleSetPropsInterface['commissionableBookingFeePercentValue'],
  commissionablePriceSelling: RuleSetPropsInterface['commissionablePriceSelling'],
  commissionablePriceSellingValue: RuleSetPropsInterface['commissionablePriceSellingValue'],
  disabledProp?: boolean
}

export interface PriceNetInterface {
  netBookingFeeAbsolute: RuleSetPropsInterface['netBookingFeeAbsolute'],
  netBookingFeeAbsoluteValue: RuleSetPropsInterface['netBookingFeeAbsoluteValue'],
  netBookingFeePercent: RuleSetPropsInterface['netBookingFeePercentValue'],
  netBookingFeePercentValue: RuleSetPropsInterface['netBookingFeePercentValue'],
  netPriceSelling: RuleSetPropsInterface['netPriceSelling'],
  netPriceSellingValue: RuleSetPropsInterface['netPriceSellingValue'],
  disabledProp?: boolean
}
export interface OfferCodeInterface {
  offerCode: RuleSetPropsInterface['offerCode']
  errors: RuleSetPropsInterface['errors'],
  ruleSetIndex: RuleSetPropsInterface['ruleSetIndex'],
}
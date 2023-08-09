import {PriceCommissionableType, PriceNetType, PriceMatrix, RuleSetInterface} from "./PriceMatrixInterface.ts";
import {FormikHelpers} from "formik";
import {FormikState} from "formik/dist/types";

export interface RuleSetPropsInterface {
  ruleSetId: RuleSetInterface['ruleSetId'],
  priority: RuleSetInterface['ruleSetId'],
  offerCode: RuleSetInterface['offerCode'],
  note: RuleSetInterface['note'],
  insideCommissionRate: RuleSetInterface['insideCommissionRate'],
  rules: RuleSetInterface['rules']
  netBookingFeeAbsoluteValue: PriceNetType['bookingFeeAbsolute'],
  netBookingFeePercentValue: PriceNetType['bookingFeePercent'],
  netPriceSellingValue: PriceNetType['priceSelling'],
  netBookingFeeAbsolute: string,
  netBookingFeePercent: string,
  netPriceSelling: string,
  commissionableBookingFeeAbsoluteValue: PriceCommissionableType['bookingFeeAbsolute'],
  commissionableBookingFeePercentValue: PriceCommissionableType['bookingFeePercent'],
  commissionablePriceSellingValue: PriceCommissionableType['priceSelling'],
  commissionableBookingFeeAbsolute: string,
  commissionableBookingFeePercent: string,
  commissionablePriceSelling: string,
  removeRuleSet: () => void,
  rulesString: string,
  setFieldValue: FormikHelpers<PriceMatrix>['setFieldValue'],
  values: FormikState<PriceMatrix>['values'],
  setValues: FormikHelpers<PriceMatrix>['setValues'],
  ruleSetIndex: number,
  errors: FormikState<PriceMatrix>['errors'],
  nameProp?: string | null,
  disabledProp?: boolean
}
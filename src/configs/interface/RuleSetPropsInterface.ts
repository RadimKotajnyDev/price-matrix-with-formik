import {PriceCommissionableType, PriceMatrixInterface, PriceNetType, RuleSetInterface} from "./PriceMatrixInterface.ts";
import {FormikHelpers} from "formik";
import {FormikState} from "formik/dist/types";

export interface RuleSetPropsInterface {
  isRemoving: boolean,
  ruleSetId: RuleSetInterface['ruleSetId'],
  priority: RuleSetInterface['ruleSetId'],
  offerCode: RuleSetInterface['offerCode'],
  note: RuleSetInterface['note'],
  insideCommissionRate: RuleSetInterface['insideCommissionRate'],
  priceBandCodes: RuleSetInterface['priceBandCodes'],

  performancesFrom: string | null,
  performancesTo: string | null,
  bookingsFrom: string | null,
  bookingsTo: string | null,
  //selectedPerformanceTimes: selectedPerformanceTime[],
  selectedPerformanceTimesName: string,

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
  //setFieldValue: FormikHelpers<PriceMatrixInterface>['setFieldValue'],
  values: FormikState<PriceMatrixInterface>['values'],
  setValues: FormikHelpers<PriceMatrixInterface>['setValues'],
  ruleSetIndex: number,
  errors: FormikState<PriceMatrixInterface>['errors'],
  nameProp?: string | null,
  disabledProp?: boolean
}
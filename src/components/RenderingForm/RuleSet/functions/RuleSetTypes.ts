import {FormikValues} from "formik";
import * as React from "react";

export type FormikErrors<Values> = { [K in keyof Values]?: string };

export interface RuleType {
  fieldId: number | string,
  compareOperatorId: number | string,
  value: string,
}

export interface RuleSetProps {
  ruleSetID: number | string,
  ruleSetPriority: number | string,
  offerCode: string,
  note: string,
  netBookingFeeAbsoluteValue: number | string,
  netBookingFeePercentValue: number | string,
  netPriceSellingValue: number | string,
  netBookingFeeAbsolute: string,
  netBookingFeePercent: string,
  netPriceSelling: string,
  commissionableBookingFeeAbsoluteValue: number | string,
  commissionableBookingFeePercentValue: number | string,
  commissionablePriceSellingValue: number | string,
  commissionableBookingFeeAbsolute: string,
  commissionableBookingFeePercent: string,
  commissionablePriceSelling: string,
  insideCommissionRate: string,
  removeRuleSet: () => void,
  rules: Array<RuleType>,
  rulesString: string,
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void,
  values: FormikValues,
  setValues: (values: React.SetStateAction<any>, shouldValidate?: boolean) => void,
  ruleSetIndex: number,
  errors: any,
}
import {FormikValues} from "formik";
import * as React from "react";

export type FormikErrors<Values> = { [K in keyof Values]?: string };

export interface RuleType {
  fieldId: number | string | null,
  compareOperatorId: number | string | null,
  value: string | null,
}

export interface RuleSetProps {
  ruleSetID: number | string | null,
  ruleSetPriority: number | string | null,
  offerCode: string,
  note: string,
  netBookingFeeAbsoluteValue: number | string | null,
  netBookingFeePercentValue: number | string | null,
  netPriceSellingValue: number | string | null,
  netBookingFeeAbsolute: string,
  netBookingFeePercent: string,
  netPriceSelling: string,
  commissionableBookingFeeAbsoluteValue: number | string | null,
  commissionableBookingFeePercentValue: number | string | null,
  commissionablePriceSellingValue: number | string | null,
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
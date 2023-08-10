import {FormikErrors, FormikState} from "formik/dist/types";
import {PriceMatrixInterface, RulesType} from "./PriceMatrixInterface.ts";
import {FormikHelpers} from "formik";

export interface RulePropsInterface {
  errors: FormikErrors<PriceMatrixInterface>,
  ruleSetIndex: number,
  ruleIndex: number,
  setFieldValue: FormikHelpers<PriceMatrixInterface>['setFieldValue'],
  fieldName: string,
  optionName: string,
  valueName: string,
  rule: RulesType,
  value: string | null,
  values: FormikState<PriceMatrixInterface>['values'],
  setValues: FormikHelpers<PriceMatrixInterface>['setValues'],
}
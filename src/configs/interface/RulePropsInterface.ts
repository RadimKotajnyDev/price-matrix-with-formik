import {FormikErrors, FormikState} from "formik/dist/types";
import {PriceMatrix, RulesType} from "./PriceMatrixInterface.ts";
import {FormikHelpers} from "formik";

export interface RulePropsInterface {
  errors: FormikErrors<PriceMatrix>,
  ruleSetIndex: number,
  ruleIndex: number,
  setFieldValue: FormikHelpers<PriceMatrix>['setFieldValue'],
  fieldName: string,
  optionName: string,
  valueName: string,
  rule: RulesType,
  value: string | null,
  values: FormikState<PriceMatrix>['values'],
  setValues: FormikHelpers<PriceMatrix>['setValues'],
}
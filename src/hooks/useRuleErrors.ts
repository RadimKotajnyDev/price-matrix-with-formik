import {useEffect, useState} from "react";
import {FormikErrors} from "formik/dist/types";
import {PriceMatrixInterface, RuleSetInterface} from "../configs/interface/PriceMatrixInterface.ts";
export function useErrorStyles(errors: FormikErrors<PriceMatrixInterface>, ruleSetIndex: number, ruleIndex: number) {
  const [fieldIdErrorStyles, setFieldIdErrorStyles] = useState("");
  const [compareOperatorIdErrorStyles, setCompareOperatorIdErrorStyles] = useState("")
  const [valueErrorExists, setValueErrorExists] = useState<boolean>(false)

  useEffect(() => {
    if(errors
      && errors?.ruleSets
      && errors?.ruleSets[ruleSetIndex]
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).rules
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).rules[ruleIndex]
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).rules[ruleIndex].fieldId) {
      setFieldIdErrorStyles("border-red-400 text-red-600 bg-red-100");
    } else {
      setFieldIdErrorStyles("")
    }
    if(errors
      && errors?.ruleSets
      && errors?.ruleSets[ruleSetIndex]
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).rules
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).rules[ruleIndex]
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).rules[ruleIndex].compareOperatorId) {
      setCompareOperatorIdErrorStyles("border-red-400 text-red-600 bg-red-100");
    } else {
      setCompareOperatorIdErrorStyles("")
    }
    if(errors
      && errors?.ruleSets
      && errors?.ruleSets[ruleSetIndex]
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).rules
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).rules[ruleIndex]
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).rules[ruleIndex].value) {
      setValueErrorExists(true)
    } else {
      setValueErrorExists(false)
    }
  }, [errors, ruleIndex, ruleSetIndex]);
  return {fieldIdErrorStyles, compareOperatorIdErrorStyles, valueErrorExists}
}
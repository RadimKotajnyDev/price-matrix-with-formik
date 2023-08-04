import {ruleSet} from "./RuleSetType.ts";

export interface FormikInterface {
  id: number;
  name: string;
  ruleSets: ruleSet[];
}
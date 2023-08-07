import {ruleSet} from "./RuleSetType.ts";

export interface FormInterface {
  id: number;
  name: string;
  ruleSets: ruleSet[];
}
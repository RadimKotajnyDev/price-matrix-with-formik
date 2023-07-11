import Button from "../../elements/Button.tsx";
import {AiOutlinePlus} from "react-icons/ai";
import {AddRule} from "./RuleFunctions.ts";

export const AddRuleButton = (props: any) => {
  return (
    <Button classNameProp="w-full flex justify-end"
            onClickProp={() => AddRule(props.values, props.setValues, props.rulesetIndex, props.rulesetIndex)}>
      <AiOutlinePlus size={50}
                     className="rounded text-white bg-slate-700 duration-200
                       hover:text-slate-900 hover:bg-white disabled:cursor-not-allowed" />
    </Button>)
}
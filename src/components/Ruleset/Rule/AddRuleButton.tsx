import Button from "../../elements/Button.tsx";
import {AiOutlinePlus} from "react-icons/ai";
import {AddRule} from "./RuleFunctions.ts";

export const AddRuleButton = (props: any) => {
  return (
    <div onClick={() => AddRule(props.values, props.setValues, props.rulesetIndex)}
         className="w-full flex justify-center items-center gap-2 cursor-pointer">
      <Button classNameProp=" cursor-default">
        <AiOutlinePlus size={35}
                       className="rounded text-white bg-slate-800 duration-200 cursor-pointer
                       hover:text-slate-900 hover:bg-white disabled:cursor-not-allowed" />
      </Button>
      <p className="text-xl font-light">add rule</p>
    </div>
  )
}
import {AiOutlinePlus} from "react-icons/ai";
import {AddRule} from "./RuleFunctions.ts";

export const AddRuleButton = (props: any) => {
  return (
    <div className="w-full flex flex-row justify-center">
      <span onClick={() => AddRule(props.values, props.setValues, props.rulesetIndex)}
              className="w-fit flex justify-center items-center gap-2 cursor-pointer">
        <button className=" cursor-default" type="button">
          <AiOutlinePlus size={35}
                         className="rounded text-white bg-slate-800 duration-200 cursor-pointer
                       hover:text-slate-900 hover:bg-white disabled:cursor-not-allowed" />
        </button>
        <p className="text-xl font-light">add rule</p>
      </span>
    </div>
  )
}
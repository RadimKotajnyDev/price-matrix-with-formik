import {AiOutlinePlus} from "react-icons/ai";
import {AddRule} from "../functions/RuleFunctions.ts";

export const AddRuleButton = (props: any) => {
  return (
    <div className="w-full flex flex-row justify-center">
      <span onClick={() => AddRule(props.values, props.setValues, props.rulesetIndex)}
              className="w-fit flex justify-center items-center gap-2 cursor-pointer">
        <button className="flex flex-row p-1 pr-2 items-center rounded text-white bg-slate-800 duration-200 cursor-pointer
                       hover:text-slate-900 hover:bg-white disabled:cursor-not-allowed" type="button">
          <AiOutlinePlus size={25}
          />
                  <span className="text-normal font-normal uppercase">rule</span>
        </button>
      </span>
    </div>
  )
}
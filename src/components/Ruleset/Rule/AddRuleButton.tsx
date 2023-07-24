import {AiOutlinePlus} from "react-icons/ai";
import {AddRule} from "./RuleFunctions.ts";

export const AddRuleButton = (props: any) => {
  return (
    <div className="w-full flex flex-row justify-center">
      <span onClick={() => AddRule(props.values, props.setValues, props.rulesetIndex)}
              className="w-fit flex justify-center items-center gap-2 cursor-pointer">
        <button className="flex flex-row p-2 pr-3 items-center rounded text-white bg-purple-900 duration-200 cursor-pointer
                       hover:text-purple-900 hover:bg-white disabled:cursor-not-allowed" type="button">
          <AiOutlinePlus size={30}
                         className="" />
                  <span className="text-lg font-normal uppercase">rule</span>
        </button>
      </span>
    </div>
  )
}
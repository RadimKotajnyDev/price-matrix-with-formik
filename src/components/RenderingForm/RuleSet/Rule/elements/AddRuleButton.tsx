import {AiOutlinePlus} from "react-icons/ai";
import {AddRule} from "../functions/RuleFunctions.ts";

interface AddRuleButtonInterface {
  values: any,
  setValues: any,
  ruleSetIndex: number
}

export const AddRuleButton = (props: AddRuleButtonInterface) => {
  return (
    <div className="w-full flex flex-row justify-center">
      <span onClick={() => AddRule(props.values, props.setValues, props.ruleSetIndex)}
              className="w-fit flex justify-center items-center gap-2 cursor-pointer">
        <button className="flex flex-row p-1 pr-2 items-center rounded text-white bg-primary cursor-pointer
                       ButtonClass disabled:cursor-not-allowed" type="button">
          <AiOutlinePlus size={25}
          />
                  <span className="text-normal font-normal uppercase">rule</span>
        </button>
      </span>
    </div>
  )
}
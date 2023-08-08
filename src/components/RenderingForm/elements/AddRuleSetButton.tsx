import {AiOutlinePlus} from "react-icons/ai";

export const AddRuleSetButton = (props: {onAddRuleSetClick: () => void}) => {
  return (
    <div className="w-full flex justify-center">
      <button onClick={props.onAddRuleSetClick}
        className="flex flex-row p-1 pr-2 items-center rounded text-white bg-primary cursor-pointer
                       ButtonClass disabled:cursor-not-allowed" type="button">
        <AiOutlinePlus size={25}
        />
        <span className="text-normal font-normal uppercase">ruleset</span>
      </button>
    </div>
  )
}
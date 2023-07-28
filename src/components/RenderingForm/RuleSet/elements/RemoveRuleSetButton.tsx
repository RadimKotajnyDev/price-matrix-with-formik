import {AiOutlineDelete} from "react-icons/ai";

export const RemoveRuleSetButton = (props: any) => {
  return (
    <button onClick={props.removeRuleSet} type="button"
            className="ButtonClass flex flex-row items-center justify-center gap-2 bg-red-600 py-2 px-[10px]"
    >
      <AiOutlineDelete size={20}/> Ruleset
    </button>
  )
}
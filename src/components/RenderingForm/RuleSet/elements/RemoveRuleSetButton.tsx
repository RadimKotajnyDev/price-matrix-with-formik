import {AiOutlineDelete} from "react-icons/ai";

export const RemoveRuleSetButton = (props: any) => {
  return (
    <button onClick={props.removeRuleSet} type="button"
            className="ButtonClass text-sm flex flex-row items-center justify-center gap-1 bg-red-600 py-1 px-2"
    >
      <AiOutlineDelete size={20}/> Ruleset
    </button>
  )
}
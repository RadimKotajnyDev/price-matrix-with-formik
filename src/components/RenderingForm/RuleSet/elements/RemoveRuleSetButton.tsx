import {AiOutlineDelete} from "react-icons/ai";

interface RemoveRuleSetButtonProps {
  removeRuleSet: () => void
}

export const RemoveRuleSetButton = (props: RemoveRuleSetButtonProps) => {
  return (
    <button onClick={props.removeRuleSet} type="button"
            className="ButtonClass text-sm flex flex-row items-center justify-center bg-red-600 py-1 px-2"
    >
      <AiOutlineDelete size={25}/>
    </button>
  )
}
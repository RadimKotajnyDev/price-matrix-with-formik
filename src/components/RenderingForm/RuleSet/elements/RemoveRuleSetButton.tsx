import {AiOutlineDelete} from "react-icons/ai";
export const RemoveRuleSetButton = (props: {removeRuleSet: () => void}) => {

  const {removeRuleSet} = props

  return (
    <button onClick={removeRuleSet} type="button"
            className="ButtonClass text-sm flex flex-row items-center justify-center bg-red-600 py-1 px-2"
    >
      <AiOutlineDelete size={25}/>
    </button>
  )
}
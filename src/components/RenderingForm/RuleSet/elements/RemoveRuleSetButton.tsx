import {AiOutlineDelete} from "react-icons/ai";
import {TbTrashOff} from "react-icons/tb"

export const RemoveRuleSetButton = (props: {removeRuleSet: () => void, isRemoving: boolean}) => {

  const {removeRuleSet, isRemoving} = props

  return (
    <button onClick={removeRuleSet} type="button"
            className={`${isRemoving ? "bg-blue-900" : "bg-red-600"} opacity-100 ButtonClass text-sm flex flex-row items-center justify-center py-1 px-2`}
    >
      {isRemoving ? <TbTrashOff size={25}/> : <AiOutlineDelete size={25}/>}
    </button>
  )
}
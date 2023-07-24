import {AiOutlineClose} from "react-icons/ai";
export const RemoveRulesetButton = (props: any) => {
  return (
    <button onClick={props.removeRuleSet} type="button"
            className="ButtonClass bg-red-600 py-2 px-[10px]"
    >
      <AiOutlineClose size={20}/>
    </button>
  )
}
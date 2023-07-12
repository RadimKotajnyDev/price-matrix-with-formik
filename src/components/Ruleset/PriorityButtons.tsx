import {AiOutlineDown, AiOutlineUp} from "react-icons/ai";

export const PriorityButtons = (props: any) => {
  return (
    <div className="flex flex-col absolute mt-10 -left-5 gap-6">
      <button className="ButtonClass" type="button"
              onClick={props.onUP}>
        <AiOutlineUp size={35} className="ButtonIconClass" />
      </button>
      <button className="ButtonClass" type="button"
              onClick={props.onDOWN}>
        <AiOutlineDown size={35} className="ButtonIconClass" />
      </button>
    </div>
  )
}
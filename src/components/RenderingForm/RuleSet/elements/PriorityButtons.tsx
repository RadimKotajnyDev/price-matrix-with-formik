import {AiOutlineDown, AiOutlineUp} from "react-icons/ai";

interface PriorityButtonsProps {
  onUP: () => void,
  onDOWN: () => void
}

export const PriorityButtons = (props: PriorityButtonsProps) => {
  return (
    <div className="flex flex-col absolute mt-10 -left-4 gap-6">
      <button type="button"
              onClick={props.onUP}>
        <AiOutlineUp
          size={30}
          className="ButtonIconClass"
        />
      </button>
      <button type="button"
              onClick={props.onDOWN}>
        <AiOutlineDown
          size={30}
          className="ButtonIconClass"
        />
      </button>
    </div>
  )
}
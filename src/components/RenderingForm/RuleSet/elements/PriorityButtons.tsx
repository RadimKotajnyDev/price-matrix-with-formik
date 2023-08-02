import {AiOutlineDown, AiOutlineUp} from "react-icons/ai";

interface PriorityButtonsProps {
  onUP: () => void,
  onDOWN: () => void
}

export const PriorityButtons = (props: PriorityButtonsProps) => {
  return (
    <div className="flex flex-col absolute mt-10 -left-3 gap-4">
      <button type="button"
              onClick={props.onUP}>
        <AiOutlineUp
          size={25}
          className="ButtonIconClass"
        />
      </button>
      <button type="button"
              onClick={props.onDOWN}>
        <AiOutlineDown
          size={25}
          className="ButtonIconClass"
        />
      </button>
    </div>
  )
}
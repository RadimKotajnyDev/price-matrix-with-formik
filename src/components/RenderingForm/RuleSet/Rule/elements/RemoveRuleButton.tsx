import {AiOutlineMinus} from "react-icons/ai";

interface RemoveRuleProps {
  onRemoveRuleButtonClick: () => void
}

export const RemoveRuleButton = (props: RemoveRuleProps) => {
  const { onRemoveRuleButtonClick} = props
  return (
    <button type="button"
            onClick={onRemoveRuleButtonClick}>
      <AiOutlineMinus
        size={30}
        className="ml-2 rounded text-white bg-secondary duration-200
                       ButtonIconClass disabled:cursor-not-allowed"
      />
    </button>
  )
}
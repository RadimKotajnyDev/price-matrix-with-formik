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
        className="ml-2 ButtonClass bg-secondary rounded"
      />
    </button>
  )
}
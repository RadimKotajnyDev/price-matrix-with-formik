interface SaveRuleSetButtonProps {
  onSaveClick: () => void
}

export const SaveRuleSetButton = ({ onSaveClick }: SaveRuleSetButtonProps) => {
  return (
    <div className="w-full flex justify-center mt-3">
      <button
        onClick={onSaveClick}
        type="button"
        className="p-2 ButtonClass bg-gray-800">
        save ruleset
      </button>
    </div>
  )
}
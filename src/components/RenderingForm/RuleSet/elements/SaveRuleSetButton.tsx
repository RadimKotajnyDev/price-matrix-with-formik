interface SaveRuleSetButtonProps {
  onSaveClick: () => void
}

export const SaveRuleSetButton = ({ onSaveClick }: SaveRuleSetButtonProps) => {
  return (
    <div className="w-full flex justify-center mt-3">
      <button onClick={onSaveClick} className="flex flex-row px-2 p-1 items-center rounded text-white bg-slate-800 duration-200 cursor-pointer
                       hover:text-slate-900 hover:bg-white disabled:cursor-not-allowed" type="button">
        <span className=" font-normal uppercase">save ruleset</span>
      </button>
    </div>
  )
}
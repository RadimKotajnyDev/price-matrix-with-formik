export const AddRuleSetButton = (props: any) => {
  return (
    <div className="w-full flex justify-center">
      <button onClick={props.onAddRuleSetClick} className="flex flex-row px-2 p-1 items-center rounded text-white bg-slate-800 duration-200 cursor-pointer
                       hover:text-slate-900 hover:bg-white disabled:cursor-not-allowed" type="button">
        <span className="font-normal uppercase">add ruleset</span>
      </button>
    </div>
  )
}
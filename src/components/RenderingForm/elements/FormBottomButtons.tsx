interface Props {
  addRuleset: () => void,
  onClickProp: () => void
}
export const FormBottomButtons = (props: Props) => {
  return (
    <div className="flex justify-center w-full fixed bottom-5 z-50">
      <div className="flex flex-row gap-6 w-fit p-3 bg-white
  bg-opacity-20 backdrop-blur-lg  drop-shadow-lg rounded-md text-center">
        <button type="button" className="ButtonClass AddRulesetClass flex flex-row items-center p-2"
                onClick={props.addRuleset}>
            add ruleset
        </button>
        <span className="h-full w-[1px] border-[1px] border-gray-200" />
        <button type="submit" onClick={props.onClickProp} className="ButtonClass bg-teal-500 p-2">Submit Matrix</button>
      </div>
    </div>
  )
}
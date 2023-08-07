
export const SubmitMatrixButton = (props: {onClickProp: () => void, disabledOption: boolean}) => {
  return (
    <div className="flex justify-center w-full fixed bottom-5 z-50">
      <div className="flex flex-col gap-1 w-fit p-2 bg-white
  bg-opacity-20 backdrop-blur-lg  drop-shadow-lg rounded-md text-center">
        <p className="text-[12px] font-light opacity-50">This button will sent all rulesets to API.</p>
        <button disabled={props.disabledOption} type="submit" onClick={props.onClickProp} className="ButtonClass bg-action p-2 px-5">Submit</button>
      </div>
    </div>
  )
}
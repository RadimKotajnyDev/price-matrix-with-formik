
export const FormBottomButtons = () => {
  return (
    <div className="flex justify-center w-full fixed bottom-5 z-50">
      <div className="flex flex-row gap-6 w-fit p-3 bg-white
  bg-opacity-20 backdrop-blur-lg  drop-shadow-lg rounded-md text-center">
        <button type="submit" /*onClick={props.onClickProp}*/ className="ButtonClass bg-teal-500 p-2">Submit Matrix</button>
      </div>
    </div>
  )
}
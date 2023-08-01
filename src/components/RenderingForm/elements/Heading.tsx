interface HeadingProps {
  matrix: { name: string }
  addRuleSet: () => void
}

export const Heading = ({matrix, addRuleSet}: HeadingProps) => {
  return (
    <div className="mt-5 sticky top-0 z-50 block w-fit ml-auto mr-auto">
      <div className="p-3 w-fit bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded-md text-center">
        <h1 className="text-3xl text-gray-700 mb-2">{matrix.name || null}</h1>
        <div className="w-full flex justify-center pt-2 border-t">
          <button onClick={addRuleSet} className="flex flex-row px-2 p-1 items-center rounded text-white bg-slate-800 duration-200 cursor-pointer
                       hover:text-slate-900 hover:bg-white disabled:cursor-not-allowed" type="button">
            <span className=" font-normal uppercase">add ruleset</span>
          </button>
        </div>
      </div>
    </div>
  )
}
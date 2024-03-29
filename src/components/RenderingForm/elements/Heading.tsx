import {AddRuleSetButton} from "./AddRuleSetButton.tsx";

interface HeadingProps {
  matrix: { name: string },
  AddRuleSet: () => void
}

export const Heading = ({matrix, AddRuleSet}: HeadingProps) => {
  return (
    <div className="mt-5 sticky top-0 z-50 block w-auto ml-auto mr-auto">
      <div className="p-3 w-auto flex flex-col gap-2 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded-md text-center">
        <h1 className="text-3xl text-secondary pb-2 border-b">{matrix.name || null}</h1>
        <AddRuleSetButton onAddRuleSetClick={AddRuleSet} />
      </div>
    </div>
  )
}
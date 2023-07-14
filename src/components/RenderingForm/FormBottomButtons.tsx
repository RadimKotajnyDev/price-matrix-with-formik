import Button from "../elements/Button.tsx";
import {AiOutlinePlusCircle} from "react-icons/ai";

export const FormBottomButtons = (props: any) => {
  return (
    <div className="flex justify-center w-full fixed bottom-5 z-50">
      <div className="flex flex-row gap-6 w-fit p-3 bg-white
  bg-opacity-20 backdrop-blur-lg  drop-shadow-lg rounded-2xl text-center">
        <Button
          classNameProp="ButtonClass AddRulesetClass flex flex-row items-center p-2"
          onClickProp={props.addRuleset}><AiOutlinePlusCircle size={20} className="mr-2"/>
          ruleset</Button>
        <span className="h-full w-[1px] border-[1px] border-gray-200" />
        <Button typeProp="submit"
                classNameProp="ButtonClass bg-teal-500 px-8">Submit</Button>
      </div>
    </div>
  )
}
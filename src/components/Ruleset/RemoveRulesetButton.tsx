import {AiOutlineClose} from "react-icons/ai";
import Button from "../elements/Button.tsx";

export const RemoveRulesetButton = (props: any) => {
  return (
    <Button onClickProp={props.removeRuleset}
            classNameProp="ButtonClass bg-red-600 py-2 px-[10px]"
    >
      <AiOutlineClose size={20}/>
    </Button>
  )
}
import {AiOutlineClose} from "react-icons/ai";
import Button from "../elements/Button.tsx";

export const RemoveRulesetButton = (props: any) => {
  return (
    <Button onClickProp={props.removeRuleset}
            classNameProp="ButtonClass bg-red-600 p-3"
    >
      <AiOutlineClose size={25}/>
    </Button>
  )
}
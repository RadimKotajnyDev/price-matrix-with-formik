import Button from "./elements/Button.tsx";
import {AiOutlinePlusCircle} from "react-icons/ai";

interface HeadingProps {
    dataName: string,
    dataID: number,
    buttonOnClick: any
}

export const Heading = ({dataName, dataID, buttonOnClick}: HeadingProps) => {
    return (
        <div className="mt-5 sticky top-0 z-50 block w-full">
            <div className="p-3 bg-white bg-opacity-20 backdrop-blur-lg  drop-shadow-lg rounded-2xl text-center">
                <h1 className="text-3xl text-gray-700">{dataName || null}</h1>
                <h2 className="text-2xl font-light text-gray-700">MatrixID: {dataID || null}</h2>
                <div className="flex justify-center w-full">
                    <div className="flex flex-row gap-6 w-fit">
                        <Button
                            classNameProp="ButtonClass AddRulesetClass flex flex-row items-center"
                            onClickProp={buttonOnClick}><AiOutlinePlusCircle size={20} className="mr-2"/>
                            ruleset</Button>
                        <Button typeProp="submit"
                                classNameProp="ButtonClass bg-teal-500 px-8">Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
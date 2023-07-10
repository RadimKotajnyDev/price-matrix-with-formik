import Note from "./Note.tsx";
import Pricing from "./Pricing.tsx";
import OfferCode from "./OfferCode.tsx";
import Button from "../elements/Button.tsx";
import {AiOutlineClose} from "react-icons/all";
import Rule from "./Rule.tsx";
import {FieldArray} from "formik";

interface RulesetProps {
  rulesetID: number,
  rulesetPriority: number,
  rulesName: any,
  offerCode: string,
  bookingFeeAbsolute?: number | string,
  bookingFeePercent?: number | string,
  insideCommission?: number | string,
  priceSelling?: number | string,
  removeRuleset: any,
  children: any
}

export default function Ruleset(props: any) {
  const {
    rulesetID,
    rulesetPriority,
    offerCode,
    bookingFeeAbsolute,
    bookingFeePercent,
    insideCommission,
    priceSelling,
    removeRuleset
  }: RulesetProps = props
  return (
    <div
      className="w-fit p-4 my-4 rounded-md bg-gray-200 outline-gray-200 shadow-lg">
      <div>
        <div className="flex flex-row justify-between mb-2">
          <p className="font-semibold text-4xl text-gray-800">Ruleset {rulesetID}
            <span className="font-thin mx-2">|</span>
            Priority: #{rulesetPriority}
          </p>
          <Button onClickProp={removeRuleset}
                  classNameProp="ButtonClass bg-red-600"
          >
              <AiOutlineClose size={25} />
          </Button>
        </div>
        {/* TODO: Priority changer */}
        <Note />
        <div className="flex w-full px-4 -mb-4">
          <label className="w-[15rem] LabelClass">Field</label>
          <label className="w-[15rem] LabelClass">Operator</label>
          <label className="w-[15rem] LabelClass">Value</label>
        </div>
        <FieldArray name={`rulesets.rules`}>
          {({push, remove}) => (
              <>
                  {props.rules.map((rule: any, ruleIndex: number) => (
                      <Rule key={ruleIndex}
                            fieldName={props.rulesString + `[${ruleIndex}].fieldId`}
                            optionName={props.rulesString + `[${ruleIndex}].compareOperatorId`}
                            valueName={props.rulesString + `[${ruleIndex}].valueInt`}
                            remove={() => remove(ruleIndex)}
                            setFieldValue={props.setFieldValue}
                      />
                  ))}
              </>
          )}
        </FieldArray>
        <div className="flex flex-row mt-5">
          <Pricing
            bookingFeeAbsolute={bookingFeeAbsolute}
            bookingFeePercent={bookingFeePercent}
            insideCommission={insideCommission}
            priceSelling={priceSelling}
          />
          <OfferCode nameProp={offerCode} />
        </div>
      </div>
    </div>
  )
}
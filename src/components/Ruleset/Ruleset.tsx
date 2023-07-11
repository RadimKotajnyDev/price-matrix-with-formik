import Note from "./Note.tsx";
import Pricing from "./Pricing.tsx";
import OfferCode from "./OfferCode.tsx";
import Button from "../elements/Button.tsx";
import {AiOutlineClose} from "react-icons/all";
import Rule from "./Rule/Rule.tsx";
import {FieldArray} from "formik";
import {Labels} from "./Rule/Labels.tsx";
import {AddRuleButton} from "./Rule/AddRuleButton.tsx";

interface RulesetProps {
  rulesetID: number,
  rulesetPriority: number,
  offerCode: string,
  bookingFeeAbsolute?: number | string,
  bookingFeePercent?: number | string,
  insideCommission?: number | string,
  priceSelling?: number | string,
  removeRuleset: any,
  rules: any,
  rulesString: string,
  setFieldValue: any,
  values: any,
  setValues: any,
  rulesetIndex: number
}

export default function Ruleset(props: RulesetProps) {
  const {
    rulesetID,
    rulesetPriority,
    offerCode,
    bookingFeeAbsolute,
    bookingFeePercent,
    insideCommission,
    priceSelling,
    removeRuleset,
    rules,
    rulesString,
    setFieldValue,
    values,
    setValues,
    rulesetIndex
  }: RulesetProps = props
  return (
    <div
      className="w-fit p-4 my-4 rounded-md bg-white border-2 outline-gray-100 shadow-lg">
      <div>
        <div className="flex flex-row justify-between mb-2">
          <p className="font-semibold text-4xl text-gray-800">Ruleset {rulesetID}
            <span className="font-thin mx-2">|</span>
            Priority: #{rulesetPriority}
          </p>
          <Button onClickProp={removeRuleset}
                  classNameProp="ButtonClass bg-red-600"
          >
            <AiOutlineClose size={25}/>
          </Button>
        </div>
        {/* TODO: Priority changer */}
        <Note/>
        <Labels/>
        <FieldArray name={`rulesets.rules`}>
          {({push, remove}) => (
            <>
              {rules.map((rule: any, ruleIndex: number) => (
                <Rule key={ruleIndex}
                      fieldName={rulesString + `[${ruleIndex}].fieldId`}
                      optionName={props.rulesString + `[${ruleIndex}].compareOperatorId`}
                      valueName={props.rulesString + `[${ruleIndex}].valueInt`}
                      setFieldValue={setFieldValue}
                      ruleIndex={ruleIndex}
                      values={values}
                      setValues={setValues}
                      rulesetIndex={rulesetIndex}
                />
              ))}
              <AddRuleButton
                setValues={setValues}
                values={values}
                rulesetIndex={rulesetIndex}
              />
            </>
          )}
        </FieldArray>
        <div className="flex flex-row mt-5 border-t-2 pt-2">
          <Pricing
            bookingFeeAbsolute={bookingFeeAbsolute}
            bookingFeePercent={bookingFeePercent}
            insideCommission={insideCommission}
            priceSelling={priceSelling}
          />
          <OfferCode nameProp={offerCode}/>
        </div>
      </div>
    </div>
  )
}
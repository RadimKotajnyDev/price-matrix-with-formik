import Note from "./Note.tsx";
import Pricing from "./Pricing/Pricing.tsx";
import OfferCode from "./OfferCode.tsx";
import Rule from "./Rule/Rule.tsx";
import {FieldArray} from "formik";
import {Labels} from "./Rule/Labels.tsx";
import {AddRuleButton} from "./Rule/AddRuleButton.tsx";
import {RemoveRuleSetButton} from "./RemoveRuleSetButton.tsx";
import {Title} from "./Title.tsx";
import {PriorityDown, PriorityUp} from "../RenderingForm/RenderFunctions.ts";
import {PriorityButtons} from "./PriorityButtons.tsx";

export interface RuleType {
  fieldId: number,
  compareOperatorId: number,
  valueDecimal: number | "",
  valueString: string | "",
  valueDateTime: "" | string,
  valueInt: number | "",
}

interface RuleSetProps {
  ruleSetID: number,
  ruleSetPriority: number,
  offerCode: string,
  note?: string,
  bookingFeeAbsoluteValue: number | "",
  bookingFeePercentValue: number | "",
  priceSellingValue: number | "",
  insideCommissionRateValue: number | "",
  bookingFeeAbsolute: string,
  bookingFeePercent: string,
  priceSelling: string,
  insideCommissionRate: string,
  removeRuleSet: () => void,
  rules: Array<RuleType>,
  rulesString: string,
  setFieldValue: any,
  values: any,
  setValues: any,
  ruleSetIndex: number,
  errors: any
}

export default function RuleSet(props: RuleSetProps) {
  const {
    ruleSetID,
    ruleSetPriority,
    offerCode,
    note,
    bookingFeeAbsoluteValue,
    bookingFeePercentValue,
    priceSellingValue,
    insideCommissionRateValue,
    bookingFeeAbsolute,
    bookingFeePercent,
    insideCommissionRate,
    priceSelling,
    removeRuleSet,
    rules,
    rulesString,
    setFieldValue,
    values,
    setValues,
    ruleSetIndex,
    errors
  }: RuleSetProps = props
  return (
    <div
      className="w-full p-4 my-4 rounded-md bg-white border-2 outline-gray-100 shadow-lg">
      <div className="flex flex-row justify-between mb-2">
        <Title ruleSetID={ruleSetID}
               ruleSetPriority={ruleSetPriority}/>
        <RemoveRuleSetButton removeRuleSet={removeRuleSet}/>
      </div>
      <Note nameProp={note}/>
      <PriorityButtons
        onUP={() => PriorityUp(values, setValues, ruleSetIndex)}
        onDOWN={() => PriorityDown(values, setValues, ruleSetIndex)}
      />
      <Labels/>
      <FieldArray name={`ruleSets.rules`}>
        {() => (
          <>
            {rules.map((rule: RuleType, ruleIndex: number) => (
              <Rule key={ruleIndex}
                    rule={rule}
                    ruleSetIndex={ruleSetIndex}
                    ruleIndex={ruleIndex}
                    fieldName={rulesString + `[${ruleIndex}].fieldId`}
                    optionName={rulesString + `[${ruleIndex}].compareOperatorId`}
                    valueDateTimeName={rulesString + `[${ruleIndex}].valueDateTime`}
                    valueDecimalName={rulesString + `[${ruleIndex}].valueDecimal`}
                    valueIntName={rulesString + `[${ruleIndex}].valueInt`}
                    valueStringName={rulesString + `[${ruleIndex}].valueString`}
                    setFieldValue={setFieldValue}
                    setValues={setValues}
                    values={values}
                    errors={errors}
              />
            ))}
            <AddRuleButton
              setValues={setValues}
              values={values}
              rulesetIndex={ruleSetIndex}
            />
          </>
        )}
      </FieldArray>
      <section className="flex flex-row mt-5 border-t-2 pt-2">
        <Pricing
          bookingFeeAbsoluteValue={bookingFeeAbsoluteValue}
          bookingFeePercentValue={bookingFeePercentValue}
          insideCommissionRateValue={insideCommissionRateValue}
          priceSellingValue={priceSellingValue}
          bookingFeeAbsolute={bookingFeeAbsolute}
          bookingFeePercent={bookingFeePercent}
          insideCommissionRate={insideCommissionRate}
          priceSelling={priceSelling}
        />
        <OfferCode nameProp={offerCode}/>
      </section>
    </div>
  )
}
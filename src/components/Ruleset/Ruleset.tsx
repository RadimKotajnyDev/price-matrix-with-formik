import Note from "./Note.tsx";
import Pricing from "./Pricing.tsx";
import OfferCode from "./OfferCode.tsx";
import Rule from "./Rule/Rule.tsx";
import {FieldArray} from "formik";
import {Labels} from "./Rule/Labels.tsx";
import {AddRuleButton} from "./Rule/AddRuleButton.tsx";
import {RemoveRulesetButton} from "./RemoveRulesetButton.tsx";
import {Title} from "./Title.tsx";
import {PriorityDown, PriorityUp} from "../RenderingForm/RenderFunctions.ts";
import {PriorityButtons} from "./PriorityButtons.tsx";

export interface RuleType {
  fieldId: number,
  compareOperatorId: number,
  valueDecimal: number,
  valueString: string,
  valueDateTime: string,
  valueInt: number,
}

interface RulesetProps {
  rulesetID: number,
  rulesetPriority: number,
  offerCode: string,
  note?: string,
  bookingFeeAbsolute: number | string | null,
  bookingFeePercent: number | string | null,
  priceSelling: number | string | null,
  insideCommission: number | string | null,
  removeRuleset: () => void,
  rules: Array<RuleType>,
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
    note,
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
      className="w-full p-4 my-4 rounded-md bg-white border-2 outline-gray-100 shadow-lg">
      <div className="flex flex-row justify-between mb-2">
        <Title rulesetID={rulesetID}
               rulesetPriority={rulesetPriority}/>
        <RemoveRulesetButton removeRuleset={removeRuleset}/>
      </div>
      <Note nameProp={note} />
      <PriorityButtons
        onUP={() => PriorityUp(values, setValues, rulesetIndex)}
        onDOWN={() => PriorityDown(values, setValues, rulesetIndex)}
      />
      <Labels />
      <FieldArray name={`rulesets.rules`}>
        {() => (
          <>
            {rules.map((rule: RuleType, ruleIndex: number) => (
              <Rule key={ruleIndex}
                    rule={rule}
                    rulesetIndex={rulesetIndex}
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
      <section className="flex flex-row mt-5 border-t-2 pt-2">
        <Pricing
          bookingFeeAbsolute={bookingFeeAbsolute}
          bookingFeePercent={bookingFeePercent}
          insideCommission={insideCommission}
          priceSelling={priceSelling}
        />
        <OfferCode nameProp={offerCode}/>
      </section>
    </div>
  )
}
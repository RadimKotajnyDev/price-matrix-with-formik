import Note from "./elements/Note.tsx";
import Rule from "./Rule/Rule.tsx";
import {FieldArray} from "formik";
import {Labels} from "./Rule/elements/Labels.tsx";
import {AddRuleButton} from "./Rule/elements/AddRuleButton.tsx";
import {RemoveRuleSetButton} from "./elements/RemoveRuleSetButton.tsx";
import {Title} from "./elements/Title.tsx";
import {PriorityDown, PriorityUp} from "../functions/RenderFunctions.ts";
import {PriorityButtons} from "./elements/PriorityButtons.tsx";
import {BottomSection} from "./BottomSection/BottomSection.tsx";
import {RuleSetProps, RuleType} from "./RuleSetTypes.ts";

export default function RuleSet(props: RuleSetProps) {
  const {
    ruleSetID,
    ruleSetPriority,
    offerCode,
    note,
    netBookingFeeAbsoluteValue,
    netBookingFeePercentValue,
    netPriceSellingValue,
    netBookingFeeAbsolute,
    netBookingFeePercent,
    netPriceSelling,
    commissionableBookingFeeAbsoluteValue,
    commissionableBookingFeePercentValue,
    commissionablePriceSellingValue,
    commissionableBookingFeeAbsolute,
    commissionableBookingFeePercent,
    commissionablePriceSelling,
    insideCommissionRate,
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
        <PriorityButtons
          onUP={() => PriorityUp(values, setValues, ruleSetIndex)}
          onDOWN={() => PriorityDown(values, setValues, ruleSetIndex)}
        />
      </div>
      <Note nameProp={note}/>
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
                    valueName={rulesString + `[${ruleIndex}].value`}
                    value={rule.value}
                    setFieldValue={setFieldValue}
                    setValues={setValues}
                    values={values}
                    errors={errors}
              />
            ))}
            <AddRuleButton
              setValues={setValues}
              values={values}
              ruleSetIndex={ruleSetIndex}
            />
          </>
        )}
      </FieldArray>
      <BottomSection
        netBookingFeeAbsolute={netBookingFeeAbsolute}
        netBookingFeeAbsoluteValue={netBookingFeeAbsoluteValue}
        netBookingFeePercent={netBookingFeePercent}
        netBookingFeePercentValue={netBookingFeePercentValue}
        netPriceSelling={netPriceSelling}
        netPriceSellingValue={netPriceSellingValue}

        commissionableBookingFeeAbsolute={commissionableBookingFeeAbsolute}
        commissionableBookingFeeAbsoluteValue={commissionableBookingFeeAbsoluteValue}
        commissionableBookingFeePercent={commissionableBookingFeePercent}
        commissionableBookingFeePercentValue={commissionableBookingFeePercentValue}
        commissionablePriceSelling={commissionablePriceSelling}
        commissionablePriceSellingValue={commissionablePriceSellingValue}

        errors={errors}
        ruleSetIndex={ruleSetIndex}
        offerCode={offerCode}
        insideCommissionRate={insideCommissionRate}
      />
    </div>
  )
}
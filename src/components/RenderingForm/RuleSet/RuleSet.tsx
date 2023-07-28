import Note from "./elements/Note.tsx";
import Rule from "./Rule/Rule.tsx";
import {FieldArray} from "formik";
import {Labels} from "./Rule/Labels.tsx";
import {AddRuleButton} from "./Rule/AddRuleButton.tsx";
import {RemoveRuleSetButton} from "./elements/RemoveRuleSetButton.tsx";
import {Title} from "./elements/Title.tsx";
import {PriorityDown, PriorityUp} from "../functions/RenderFunctions.ts";
import {PriorityButtons} from "./elements/PriorityButtons.tsx";
import {BottomSection} from "./BottomSection/BottomSection.tsx";

type FormikErrors<Values> = { [K in keyof Values]?: string };

export interface RuleType {
  fieldId: number | string,
  compareOperatorId: number | string,
  value: string,
}

interface RuleSetProps {
  ruleSetID: number | string,
  ruleSetPriority: number | string | null,
  offerCode: string,
  note: string,
  netBookingFeeAbsoluteValue: number | string,
  netBookingFeePercentValue: number | string,
  netPriceSellingValue: number | string,
  netBookingFeeAbsolute: string,
  netBookingFeePercent: string,
  netPriceSelling: string,
  commissionableBookingFeeAbsoluteValue: number | string,
  commissionableBookingFeePercentValue: number | string,
  commissionablePriceSellingValue: number | string,
  commissionableBookingFeeAbsolute: string,
  commissionableBookingFeePercent: string,
  commissionablePriceSelling: string,
  insideCommissionRate: string,
  removeRuleSet: () => void,
  rules: Array<RuleType>,
  rulesString: string,
  setFieldValue: (field: string | number | undefined, value: string | number, shouldValidate?: boolean | undefined) => void,
  values: { ruleSets: object[]; },
  setValues: () => void,
  ruleSetIndex: number,
  errors: FormikErrors<{ ruleSets: object[]; }>,
}

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
        offerCode={offerCode}
        insideCommissionRate={insideCommissionRate} />
    </div>
  )
}
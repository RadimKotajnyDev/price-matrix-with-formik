import {Note} from "./elements/Note.tsx";
import {RemoveRuleSetButton} from "./elements/RemoveRuleSetButton.tsx";
import {Title} from "./elements/Title.tsx";
import {PriorityDown, PriorityUp} from "../functions/RenderFunctions.ts";
import {PriorityButtons} from "./elements/PriorityButtons.tsx";
import {BottomSection} from "./BottomSection/BottomSection.tsx";
import {RuleSetPropsInterface} from "../../../configs/interface/RuleSetPropsInterface.ts";
import {DateSelector} from "./DateSelector/DateSelector.tsx";
import {PriceBandCodes} from "./elements/PriceBandCodes.tsx";
import {Divider} from "../../elements/Divider.tsx";
import {ExclusionDates} from "./ExclusionDates/ExclusionDates.tsx";

export const RuleSet = (props: RuleSetPropsInterface) => {
  const {
    isRemoving,
    ruleSetId,
    priority,
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
    priceBandCodes,
    performancesFrom,
    performancesTo,
    bookingsFrom,
    bookingsTo,
    selectedPerformanceTimesName,
    values,
    setValues,
    ruleSetIndex,
    errors
  } = props

  return (
    <div className="w-full p-4 my-4 rounded-md bg-white border-2 outline-gray-100 shadow-lg">
      <div className="flex flex-row justify-between mb-2">
        <Title ruleSetId={ruleSetId}
               ruleSetPriority={priority}/>
        <RemoveRuleSetButton isRemoving={isRemoving} removeRuleSet={removeRuleSet}/>
        <PriorityButtons
          onUP={() => PriorityUp(values, setValues, ruleSetIndex)}
          onDOWN={() => PriorityDown(values, setValues, ruleSetIndex)}
        />
      </div>
      <Note nameProp={note}/>
      <div className="flex flex-row my-4">
        <DateSelector
          ruleSetIndex={ruleSetIndex}
          errors={errors}

          performancesFrom={performancesFrom}
          performancesTo={performancesTo}
          bookingsFrom={bookingsFrom}
          bookingsTo={bookingsTo}
          selectedPerformanceTimesName={selectedPerformanceTimesName}
        />
        <Divider/>
        <PriceBandCodes nameProp={priceBandCodes}/>
      </div>
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
        isRemoving={isRemoving}
        offerCode={offerCode}
        insideCommissionRate={insideCommissionRate}
      />
      <ExclusionDates />
    </div>
  )
}
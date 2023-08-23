import {Field} from "formik";
import {OfferCodeInterface} from "../../../../../configs/interface/BottomSectionInterface.ts";
import {RuleSetInterface} from "../../../../../configs/interface/PriceMatrixInterface.ts";

export const OfferCode = (props: OfferCodeInterface) => {

  const {
    offerCode,
    errors,
    ruleSetIndex,
  } = props

  return (
    <div className="flex flex-col">
      <label className="LabelClass">Offer Code</label>
      <Field type="text" name={offerCode} className={`InputClass w-56 
      ${errors
      && errors?.ruleSets
      && errors?.ruleSets[ruleSetIndex]
      && (errors?.ruleSets[ruleSetIndex] as RuleSetInterface).offerCode ? "border-red-400 bg-red-100" : ""
      }
      `} />
    </div>
  )
}
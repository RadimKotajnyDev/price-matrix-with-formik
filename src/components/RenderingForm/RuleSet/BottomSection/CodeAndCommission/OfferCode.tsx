import {Field} from "formik";

interface Props {
  nameProp: string,
  errors: any,
  ruleSetIndex: number
}

export const OfferCode = (props: Props) => {
  return (
    <div className="flex flex-col">
      <label className="LabelClass">Offer Code</label>
      <Field type="text" name={props.nameProp} className={`InputClass w-full 
      ${props.errors
      && props.errors?.ruleSets
      && props.errors?.ruleSets[props.ruleSetIndex]
      && props.errors?.ruleSets[props.ruleSetIndex].offerCode ? "border-red-400 bg-red-100" : ""
      }
      `} />
    </div>
  )
}